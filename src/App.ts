import cloud, { HandlerContext, HandlerEvent } from 'wx-server-sdk'
import { Container } from './Container'
import {
  App as AppInterface,
  AppConstructorOptions,
  RouteHandler
} from '../types'
import Routes from './Routes'

export class App implements AppInterface {
  protected $container = Container.getInstance()

  constructor(env: AppConstructorOptions = cloud.DYNAMIC_CURRENT_ENV) {
    cloud.init({ env })

    this.$container.register('cloud', cloud)
    this.$container.register('routes', new Routes())
  }

  protected get $routes() {
    return this.$container.resolve<Routes>('routes')
  }

  route(path: string, handler: RouteHandler) {
    this.$routes.add(path, handler)
  }

  async handle(event: HandlerEvent, context: HandlerContext) {
    await this.$routes.dispatch({ event, context })
  }
}
