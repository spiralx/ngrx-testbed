// import { out } from '../utils'


export const shareTableModel = () => {
  return state => state
    .map(([ shares, userDict ]) => {
      // out(`shareTableModel(shares, userDict)`, { shares, userDict }, true)

      const shareholders = new Set()

      const items = shares.map(share => {
        const user = userDict[ share.holder ]

        shareholders.add(user)

        return { ...share, user }
      })

      return {
        shares: items,
        shareholders
      }
    })
}
