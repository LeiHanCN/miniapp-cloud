export enum RouteHandlerEventTypes {
  TIMER = 'Timer'
}

export interface RouteHandlerEvent {
  $api: string
  type?: RouteHandlerEventTypes
}

export interface RouteHandlerContext {}

export interface RouteHandlerNativeOptions {
  event: RouteHandlerEvent
  context: RouteHandlerContext
}
export type RouteHandler = (
  event: RouteHandlerEvent,
  context: RouteHandlerContext
) => void

export interface Route {
  run: (nativeHandlerOptions: RouteHandlerNativeOptions) => void
}
