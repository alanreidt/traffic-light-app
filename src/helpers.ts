import { MILLISECONDS_IN_A_SECOND } from "./constants";

const secondsToMiliseconds = (seconds: number) =>
  seconds * MILLISECONDS_IN_A_SECOND;

export {
  secondsToMiliseconds,
}
