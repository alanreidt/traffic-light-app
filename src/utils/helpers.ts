import { MILLISECONDS_IN_A_SECOND } from "./constants";

const secondsToMilliseconds = (seconds: number) =>
  seconds * MILLISECONDS_IN_A_SECOND;

export {
  secondsToMilliseconds,
}
