import IActaBase from './iactabase'

class ActaAction implements IActaBase {

  private _action: Number

  constructor(action: Number) {
    this._action = action
  }

  public getAction(): Number {
    return this._action
  }

  public setAction(action: Number) {
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
