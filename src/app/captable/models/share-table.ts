// import { out } from '../utils'


export const shareTableModel = () => {
  return state => state
    .map(([ shares, investorDict ]) => {
      // out(`shareTableModel(shares, userDict)`, { shares, userDict }, true)

      const shareholders = new Set()

      const items = shares.map(share => {
        const investor = investorDict[ share.investor ]

        shareholders.add(investor)

        return { ...share, investor }
      })

      return {
        shares: items,
        shareholders
      }
    })
}
