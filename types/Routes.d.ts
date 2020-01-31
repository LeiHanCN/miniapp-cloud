import { RouteHandler, RouteHandlerNativeOptions } from './Route'

export interface Routes {
  add: (path: string, handler: RouteHandler) => void
  dispatch: (nativeHandlerOptions: RouteHandlerNativeOptions) => any
}
