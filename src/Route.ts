import {
  RouteHandler,
  Route as RouteInterface,
  RouteHandlerNativeOptions
} from '../types'

export default class Route implements RouteInterface {
  constructor(protected $handler: RouteHandler) {}

  async run({ event, context }: RouteHandlerNativeOptions) {
    return await this.$handler(event, context)
  }
}
