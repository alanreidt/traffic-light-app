import { MILLISECONDS_IN_A_SECOND } from "./constants";

const secondsToMilliseconds = (seconds: number) =>
  seconds * MILLISECONDS_IN_A_SECOND;

const millisecondsToSeconds = (milliseconds: number) => {
  const result = (milliseconds / MILLISECONDS_IN_A_SECOND).toFixed(3);

  return Number(result);
}

export {
  secondsToMilliseconds,
  millisecondsToSeconds
}
