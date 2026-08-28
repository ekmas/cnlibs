"use client";

import { DirectionProvider as DirectionProviderPrimitive } from "@base-ui/react/direction-provider";

/**
 * Sets the reading direction ("ltr" | "rtl") for descendant base-ui
 * components. Pure context provider — renders no DOM element of its own,
 * so there is no root to attach `data-slot` to.
 */
function DirectionProvider(props: DirectionProviderPrimitive.Props) {
  return <DirectionProviderPrimitive {...props} />;
}

export { DirectionProvider };
