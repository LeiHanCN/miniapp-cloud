import * as cloud from 'wx-server-sdk'
import { Container } from './Container'
import {
  App as AppInterface,
  AppConstructorOptions,
  RouteHandler,
  RouteHandlerContext,
  RouteHandlerEvent,
  RouteHandlerEventTypes
} from '../types/index'
import Routes from './Routes'

export default class App implements AppInterface {
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

  async handle(event: RouteHandlerEvent, context: RouteHandlerContext) {
    switch (event.type) {
      case RouteHandlerEventTypes.TIMER:
        // do something schedule task.
        break
      default:
        await this.$routes.dispatch({ event, context })
        break
    }
  }
}
