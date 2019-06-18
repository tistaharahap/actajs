import Acta from './acta'
import ActaActor from './actor'
import ActaAction from './action'
import ActaObject from './object'
import ActaMeta from './meta'
import { IncompleteBuildError } from './errors'

class ActaBuilder {

  private static _actor: ActaActor
  private static _action: ActaAction
  private static _object: ActaObject
  private static _meta: ActaMeta

  public static withActor(actor: ActaActor): ActaBuilder {
    ActaBuilder._actor = actor
    return ActaBuilder
  }

  public static withAction(action: ActaAction): ActaBuilder {
    ActaBuilder._action = action
    return ActaBuilder
  }

  public static withObject(obj: ActaObject): ActaBuilder {
    ActaBuilder._object = obj
    return ActaBuilder
  }

  public static withMeta(meta: ActaMeta): ActaBuilder {
    ActaBuilder._meta = meta
    return ActaBuilder
  }

  public static build(): Acta {
    if (ActaBuilder._actor === null) {
      throw new IncompleteBuildError('Actor')
    }
    if (ActaBuilder._action === null) {
      throw new IncompleteBuildError('Action')
    }
    if (ActaBuilder._object === null) {
      throw new IncompleteBuildError('Object')
    }
    
    const acta = new Acta(
      ActaBuilder._actor,
      ActaBuilder._action,
      ActaBuilder._object,
      ActaBuilder._meta
    )

    ActaBuilder._actor = null
    ActaBuilder._action = null
    ActaBuilder._object = null
    ActaBuilder._meta = null

    return acta
  }

}

export {
  ActaBuilder,
  ActaActor,
  ActaAction,
  ActaObject,
  ActaMeta,
  Acta,
}
