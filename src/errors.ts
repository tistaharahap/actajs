class ActaError extends Error {}

class IncompleteBuildError extends ActaError {

  constructor(missingPart: string) {
    super(`${missingPart} is required`)
  }

}

export {
  ActaError,
  IncompleteBuildError,
}
