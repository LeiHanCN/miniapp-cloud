export class App {
  private static _app: App

  private constructor() {}

  public static getInstance = () => App._app || (App._app = new App())
}
