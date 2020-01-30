
declare module 'wx-server-sdk' {
  export * from '@types/wx-server-sdk'

  export enum HandlerEventTypes {
    TIMER = 'Timer'
  }
  export interface HandlerEvent {
    $api: string
    type?: HandlerEventTypes
  }
  export interface HandlerContext {}
  export const DYNAMIC_CURRENT_ENV: string
  export interface NativeHandlerOptions {
    event: HandlerEvent
    context: HandlerContext
  }

}

