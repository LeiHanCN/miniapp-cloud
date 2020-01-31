import { RouteHandler, RouteHandlerContext, RouteHandlerEvent } from './Route'

type AppConstructorOptions =
  | string
  | {
      database: string
      storage: string
      functions: string
    }

interface App {
  route: (path: string, handler: RouteHandler<any, any>) => void
  handle: (event: RouteHandlerEvent, context: RouteHandlerContext) => void
}
interface AppConstructor {
  new (env?: AppConstructorOptions): App
}

export const App: AppConstructor
