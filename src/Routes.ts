import Route from './Route'
import { RouteHandler, Routes as RoutesInterface } from '../types'
import { NativeHandlerOptions } from 'wx-server-sdk';

export default class Routes implements RoutesInterface {
  protected $routeMap = new Map<string, Route>()

  add(path: string, handler: RouteHandler) {
    this.$routeMap.set(path, new Route(handler))
  }

  async dispatch(nativeHandlerOptions: NativeHandlerOptions) {
    const { event:{ $api }} = nativeHandlerOptions
    await this.$routeMap.get($api)?.run(nativeHandlerOptions)
  };
}
