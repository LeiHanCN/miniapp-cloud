import {HandlerContext, HandlerEvent, NativeHandlerOptions} from 'wx-server-sdk'

export type RouteHandler = (
  event: HandlerEvent,
  context: HandlerContext
) => void

export interface Route {
	run: (nativeHandlerOptions: NativeHandlerOptions) => void
}