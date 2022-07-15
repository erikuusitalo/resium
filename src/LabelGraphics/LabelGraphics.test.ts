import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { LabelGraphics } from "cesium";

import { UnusedCesiumProps, Merge } from "../core";
import { LabelGraphicsProps, cesiumEventProps } from "./LabelGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<LabelGraphics, LabelGraphics.ConstructorOptions>,
  LabelGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
