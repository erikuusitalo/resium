import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { CylinderGraphics } from "cesium";

import { Merge, UnusedCesiumProps } from "../core";
import { cesiumEventProps, CylinderGraphicsProps } from "./CylinderGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CylinderGraphics, CylinderGraphics.ConstructorOptions>,
  CylinderGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
