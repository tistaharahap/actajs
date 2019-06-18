import IActaBase from './iactabase'

class ActaObject implements IActaBase {

  private _type: Number
  private _id: string

  constructor(type: Number, id: string) {
    this._type = type
    this._id = id
  }

  public getType(): Number {
    return this._type
  }

  public setType(type: Number) {
    this._type = type
  }

  public getId(): string {
    return this._id
  }

  public setId(id: string) {
    this._id = id
  }

  public toJson(): any {
    return {
      type: this._type,
      id: this._id,
    }
  }

  public toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

}

export default ActaObject
