import { SquatCounter } from "./squatCounter";
import { PushupCounter } from "./pushupCounter";
import { DeadliftCounter } from "./DeadliftCounter";

export const exerciseCounterLoader = {
  // Specify the exercuse ID and the corresponding counter class
  "ed999b28-ae50-4009-b29c-c7f6a28857c9": PushupCounter,
  "fb7180ab-f3e2-4a5d-b731-a2c0fc5de9fa": SquatCounter,
  "deadlift-uuid-1234-5678-9012-34567890abcd": DeadliftCounter,
};
export const EXERCISE_ID_MAPPING = {
  1: "ed999b28-ae50-4009-b29c-c7f6a28857c9", // Push Up
  2: "fb7180ab-f3e2-4a5d-b731-a2c0fc5de9fa", // Squat
  3: "deadlift-uuid-1234-5678-9012-34567890abcd", // Deadlift
};
