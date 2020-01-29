
declare module 'wx-server-sdk' {
  export * from '@types/wx-server-sdk'

  export interface HandlerEvent {
    $api: string
    type?: 'Timer'
  }
  export interface HandlerContext {}
  export const DYNAMIC_CURRENT_ENV: string
  export interface NativeHandlerOptions {
    event: HandlerEvent
    context: HandlerContext
  }

}

