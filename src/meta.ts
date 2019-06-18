import IActaBase from './iactabase'

class ActaMeta implements IActaBase {

  private _data: any

  constructor(data: any) {
    this._data = data
  }

  public getData(): any {
    return this._data
  }

  public setData(data: any) {
    this._data = data
  }

  public toJson(): any {
    return this._data !== null ? {
      data: this._data
    } : {}
  }

  public toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

}

export default ActaMeta
