
export const logExtender = () => {
  const methods = {
    dir: rawMethod => function dir(...objs) {
      const [ first, second, ...rest ] = objs

      if (second === true && !rest.length) {
        for (const [ name, obj ] of first.entries()) {
          console.group(name)
          rawMethod(obj)
          console.groupEnd()
        }
      } else {
        for (const obj of objs) {
          rawMethod(obj)
        }
      }
    }
  }


  return log => {
    const originalFactory = log.methodFactory

    Object.assign(log, {
      methodFactory(method_name, log_level, logger_name) {
        const rawMethod = originalFactory(method_name, log_level, logger_name)

        const consoleGroup = originalFactory('group', log_level, logger_name)
        const consoleGroupEnd = originalFactory('groupEnd', log_level, logger_name)

        return function (...args) {
          this.dir = this.dir || methods.dir(rawMethod)

          return rawMethod.apply(this, args)
        }
      }
    })

    return log
  }
}
