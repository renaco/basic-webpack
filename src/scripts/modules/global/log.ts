
export class log{
  log(...args) {
    console.log.apply(console, args);
  }
}

export default log;