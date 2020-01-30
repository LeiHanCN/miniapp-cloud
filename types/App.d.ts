import { RouteHandler } from './Route'
import { HandlerContext, HandlerEvent } from 'wx-server-sdk'

type AppConstructorOptions =
  | string
  | {
      database: string
      storage: string
      functions: string
    }

interface App {
  new(env?: AppConstructorOptions): App
  route: (path: string, handler: RouteHandler) => void
  handle: (event: HandlerEvent, context: HandlerContext) => void
}

export const App: App
