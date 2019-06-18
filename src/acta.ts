import ActaActor from './actor'
import ActaAction from './action'
import ActaObject from './object'
import ActaMeta from './meta'
import IActaBase from './iactabase'

class Acta implements IActaBase {
  
  private actor: ActaActor
  private action: ActaAction
  private obj: ActaObject
  private meta: ActaMeta

  constructor(actor: ActaActor, action: ActaAction, obj: ActaObject, meta: ActaMeta) {
    this.setActor(actor)
    this.setAction(action)
    this.setObject(obj)
    this.setMeta(meta)
  }

  public getActor(): ActaActor {
    return this.actor
  }

  public setActor(actor: ActaActor) {
    this.actor = actor
  }

  public getAction(): ActaAction {
    return this.action
  }

  public setAction(action: ActaAction) {
    this.action = action
  }

  public getObject(): ActaObject {
    return this.obj
  }

  public setObject(obj: ActaObject) {
    this.obj = obj
  }

  public getMeta(): ActaMeta {
    return this.meta
  }

  public setMeta(meta: ActaMeta) {
    this.meta = meta
  }

  public toJson(): any {
    return {
      actor: this.actor.toJson(),
      action: this.action.getAction(),
      object: this.obj.toJson(),
      meta: this.meta.getData(),
    }
  }

  public toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

}

export default Acta
