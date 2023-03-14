import { useEffect, useState, useCallback } from 'react'
import { AbiItem } from 'web3-utils'
import { getWeb3NoAccount } from 'utils/web3'
import UniV2LPABI from 'constants/abis/UniV2LP.json'
import BigNumber from 'bignumber.js'
import useBlock from './useBlock'

const web3 = getWeb3NoAccount()
const CoreUSDTPairAddress = '0x8Cf4B67F1921eB6106932a561280150B12a2F903'
const CoreUsdtPairContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, CoreUSDTPairAddress)

const BowCorePairAddress = '0xBb8502132C87Ee31bE0E2bC1CB8CC69374488261'
const BowCorePairContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, BowCorePairAddress)

const useBowPrice = () => {
  const [price, setPrice] = useState(0.25)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try {
      const coreObj = await CoreUsdtPairContract.methods.getReserves().call()
      if (!new BigNumber(coreObj._reserve0).eq(new BigNumber(0))) {
        const corePrice = new BigNumber(coreObj._reserve1).div(coreObj._reserve0).times(1e12)
        const archerObj = await BowCorePairContract.methods.getReserves().call()
        if (!new BigNumber(archerObj._reserve0).eq(new BigNumber(0))) {
          const archerPrice = new BigNumber(archerObj._reserve1).div(archerObj._reserve0).times(corePrice)
          if (!archerPrice.isEqualTo(price)) {
            setPrice(archerPrice.toNumber())
          }
        } else {
          setPrice(0.25)
        }
      } else {
        setPrice(0.25)
      }
    } catch (e) {
      setPrice(0)
    }
  }, [price])

  useEffect(() => {
    if (CoreUsdtPairContract && BowCorePairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useBowPrice
