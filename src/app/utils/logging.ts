

// export class Logger {
//   constructor(private name: string) {}

//   private addPrefix(message: string): string[] {

//   }
// }


export const out = (heading, ...items) => {
  console.group(heading)

  const [ first, second, ...rest ] = items

  if (second === true && !rest.length) {
    for (const [ name, item ] of Object.entries(first)) {
      console.info(`-- ${name} --`)
      console.dir(item)
    }
  } else {
    for (const item of items) {
      console.dir(item)
    }
  }

  console.groupEnd()
}
