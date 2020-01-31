import * as cloud from 'wx-server-sdk'
import { Container } from './Container'
import {
  App as AppInterface,
  AppConstructorOptions,
  RouteHandler,
  RouteHandlerContext,
  RouteHandlerEvent
} from '../types'
import Routes from './Routes'
import { RouteHandlerEventTypes } from './config'

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

  handle(event: RouteHandlerEvent, context: RouteHandlerContext) {
    if (event.type === RouteHandlerEventTypes.TIMER) {
      console.log(`> 执行定时任务：${event}`)
      // @todo 定时任务
      return
    }

    console.group(`> 执行 API：${event.$api}`)
    console.log('> event: ', event, ' context: ', context)
    console.groupEnd()
    this.$routes.dispatch({ event, context })
  }
}
