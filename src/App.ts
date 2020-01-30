import cloud, { HandlerContext, HandlerEvent, HandlerEventTypes } from 'wx-sdk'
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
    this.$container.register('db', cloud.database())
    this.$container.register('context', cloud.getWXContext())
    this.$container.register('routes', new Routes())
  }

  protected get $routes() {
    return this.$container.resolve<Routes>('routes')
  }

  route(path: string, handler: RouteHandler) {
    this.$routes.add(path, handler)
  }

  async handle(event: HandlerEvent, context: HandlerContext) {
    switch (event.type) {
      case HandlerEventTypes.TIMER:
        // do something schedule task.
        break
      default:
        await this.$routes.dispatch({ event, context })
        break
    }
  }
}
