export { App } from './types'
declare global {
  const use: <T = any>(key: string) => T
}
