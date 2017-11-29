import { Named } from '../models'

// ----------------------------------------------------

export function compareByName (a: Named, b: Named): number {
  return a.name.localeCompare(b.name)
}
