import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "../core";
import { RectangleGraphicsProps, cesiumEventProps, Target } from "./RectangleGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  RectangleGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
