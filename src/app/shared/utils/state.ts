import { Named } from '@app/core/models'

// ----------------------------------------------------

export function compareByName (a: Named, b: Named): number {
  return a.name.localeCompare(b.name)
}
