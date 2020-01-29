export interface Container {
	register: <T>(key: string, value: T) => void
	resolve: <T>(key: string) => T
}
