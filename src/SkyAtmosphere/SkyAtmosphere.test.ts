import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { SkyAtmosphere } from "cesium";

import { UnusedCesiumProps } from "../core";
import { SkyAtmosphereProps } from "./SkyAtmosphere";

// Unused prop check
type UnusedProps = UnusedCesiumProps<SkyAtmosphere, SkyAtmosphereProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
