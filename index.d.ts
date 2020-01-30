import { App as AppType } from './types'

const App: AppType
export default App

declare global {
  const use: <T = any>(key: string) => T
}
