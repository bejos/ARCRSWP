import { MenuEntry } from 'archerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://archerswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      // {
      //   label: 'Zap',
      //   href: '/zap',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://archerswap.finance/farms',
  },
  // {
  //   label: 'Hunt',
  //   icon: 'HuntIcon',
  //   href: 'https://archerswap.finance/hunt',
  // },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://archerswap.finance/xbow',
  },
  // {
  //   label: 'Bridge',
  //   icon: 'BridgeIcon',
  //   href: 'https://archerswap.finance/bridge',
  //   tag: 'new',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '#',
  //   tag: 'coming soon',
  // },
  {
    label: 'BowPad',
    icon: 'IfoIcon',
    href: 'https://archerswap.finance/ido',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://info.archerswap.finance/home',
  },
  {
    label: 'Multisender',
    icon: 'DisperseIcon',
    href: 'https://archerswap.finance/disperse',
  },
  {
    label: 'Partnership',
    icon: 'PartnerIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSffYIbIQYYjr52AeRolVPcNNTF6vIjS3qTUACa9UpbIlFVp7w/viewform',
    target: '_blank',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://docs.archerswap.finance/products-and-features-guide/audit',
    target: '_blank',
  },
  // {
  //   label: 'Listing',
  //   icon: 'ReferralIcon',
  //   items: [
  //     {
  //       label: 'Snowtrace Explorer',
  //       href: 'https://snowtrace.io/token/0x695Fa794d59106cEbd40ab5f5cA19F458c723829',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'DappRadar',
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: '#',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.archerswap.finance',
        target: '_blank',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@archerswap',
        target: '_blank',
      },
    ],
  },
]

export default config
