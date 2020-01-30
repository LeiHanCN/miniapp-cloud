import { NativeHandlerOptions } from 'wx-sdk'
import { RouteHandler } from './Route'

export interface Routes {
  add: (path: string, handler: RouteHandler) => void
  dispatch: (nativeHandlerOptions: NativeHandlerOptions) => void
}
