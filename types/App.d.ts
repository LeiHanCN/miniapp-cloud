import { RouteHandler, RouteHandlerContext, RouteHandlerEvent } from './Route'

type AppConstructorOptions =
  | string
  | {
      database: string
      storage: string
      functions: string
    }

interface App {
  new? (env?: AppConstructorOptions): App
  route: (path: string, handler: RouteHandler) => void
  handle: (event: RouteHandlerEvent, context: RouteHandlerContext) => void
}

export const App: App
