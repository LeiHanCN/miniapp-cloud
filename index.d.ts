import { App } from './types'

export default App
declare global {
  const use: <T = any>(key: string) => T
}
