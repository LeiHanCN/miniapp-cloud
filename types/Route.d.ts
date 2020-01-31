import { RouteHandlerEventTypes } from '../src/config'

export interface RouteHandlerEvent {
  $api: string
  type?: RouteHandlerEventTypes
}

export interface RouteHandlerContext {}

export interface RouteHandlerNativeOptions {
  event: RouteHandlerEvent
  context: RouteHandlerContext
}
export type RouteHandler = <
  TEvent extends RouteHandlerEvent = RouteHandlerEvent,
  TContext extends RouteHandlerContext = RouteHandlerContext
>(
  event: TEvent,
  context: TContext
) => void

export interface Route {
  run: (nativeHandlerOptions: RouteHandlerNativeOptions) => void
}
