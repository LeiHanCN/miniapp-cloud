import Route from './Route'
import { RouteHandler, Routes as RoutesInterface, RouteHandlerNativeOptions } from '../types'

export default class Routes implements RoutesInterface {
  protected $routeMap = new Map<string, Route>()

  add(path: string, handler: RouteHandler) {
    this.$routeMap.set(path, new Route(handler))
  }

  async dispatch(nativeHandlerOptions: RouteHandlerNativeOptions) {
    const { event:{ $api }} = nativeHandlerOptions
    return this.$routeMap.get($api)?.run(nativeHandlerOptions);
  };
}
