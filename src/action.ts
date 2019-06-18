import IActaBase from './iactabase'

class ActaAction implements IActaBase {

  private _action: string

  constructor(action: string) {
    this._action = action
  }

  public getAction(): string {
    return this._action
  }

  public setAction(action: string) {
    this._action = action
  }

  public toJson(): any {
    return {
      action: this._action
    }
  }

  public toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

}

export default ActaAction
