import { RouteHandler } from './Route'
import { HandlerContext, HandlerEvent } from 'wx-server-sdk'

export type AppConstructorOptions =
  | string
  | {
      database: string
      storage: string
      functions: string
    }

export interface App {
  route: (path: string, handler: RouteHandler) => void
  handle: (event: HandlerEvent, context: HandlerContext) => void
}
