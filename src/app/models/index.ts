
export interface Named {
  name: string
}

export interface Share {
  id: number
  count: number
  holder: number
  shareClass: number
}

export interface ShareClass extends Named {
  id: number
  // name: string
  colour: string
}

export interface User extends Named {
  id: number
  // name: string
}
