import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { ScreenSpaceCameraController } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ScreenSpaceCameraControllerProps } from "./ScreenSpaceCameraController";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ScreenSpaceCameraController,
  ScreenSpaceCameraControllerProps,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
