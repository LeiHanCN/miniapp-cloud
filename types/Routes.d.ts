import { NativeHandlerOptions } from 'wx-server-sdk'

export interface Routes {
  dispatch: (nativeHandlerOptions: NativeHandlerOptions) => void
}
