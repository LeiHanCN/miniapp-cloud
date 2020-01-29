import { Container as ContainerInterface } from '../types'

export class Container implements ContainerInterface {
  protected static $instance?: Container

  protected $storeMap: Map<string, any> = new Map()

  protected constructor() {
    this.register<Container>('container', this)
    ;(global as any).use = this.resolve
  }

  static getInstance = (): Container =>
    Container.$instance || (Container.$instance = new Container())

  register = <T>(key: string, value: T) => {
    this.$storeMap.set(key, value)
  }

  resolve = <T>(key: string) => this.$storeMap.get(key) as T
}
