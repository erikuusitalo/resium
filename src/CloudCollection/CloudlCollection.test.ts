import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { CloudCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { CloudCollectionOtherProps, CloudCollectionProps } from "./CloudCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CloudCollection,
  Omit<CloudCollectionProps, keyof CloudCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
