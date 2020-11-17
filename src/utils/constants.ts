export enum LightTypes {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
}
export type LightType = LightTypes.RED | LightTypes.YELLOW | LightTypes.GREEN;
export type TimerId = number | undefined;

export const MILLISECONDS_IN_A_SECOND = 1000;
export const DEFAULT_LIGHT_TYPE = LightTypes.RED;
