import { RouteHandler, Route as RouteInterface } from '../types'
import { NativeHandlerOptions } from 'wx-server-sdk'

export default class Route implements RouteInterface {
  constructor(protected $handler: RouteHandler) {}

  async run({ event, context }: NativeHandlerOptions) {
    this.$handler(event, context)
  }
}
