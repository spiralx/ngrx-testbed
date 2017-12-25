import { Named } from '@app/core'

// ----------------------------------------------------

export interface Investor extends Named {
  id: number
  address: string | null
}
