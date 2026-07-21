import { CircleCheckIcon, CircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Marker";
export const description =
  "A small marker for highlighting or annotating content.";

export const variants: DocVariant[] = [
  {
    code: `import { CircleCheckIcon, CircleIcon } from "lucide-react";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";

export function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon />
        </MarkerIcon>
        <MarkerContent>Order confirmed</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CircleIcon />
        </MarkerIcon>
        <MarkerContent>Preparing shipment</MarkerContent>
      </Marker>
    </div>
  );
}`,
    description: "Pair a MarkerIcon with MarkerContent to annotate a line.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-md flex-col gap-2">
        <Marker>
          <MarkerIcon>
            <CircleCheckIcon />
          </MarkerIcon>
          <MarkerContent>Order confirmed</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <CircleIcon />
          </MarkerIcon>
          <MarkerContent>Preparing shipment</MarkerContent>
        </Marker>
      </div>
    ),
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import { Marker, MarkerContent } from "@/components/ui/marker";

export function MarkerSeparatorDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Button className="w-full" variant="outline">
        Continue with Email
      </Button>
      <Marker variant="separator">
        <MarkerContent>OR</MarkerContent>
      </Marker>
      <Button className="w-full" variant="outline">
        Continue with Google
      </Button>
    </div>
  );
}`,
    description:
      "The separator variant draws a line on either side of the content, useful for dividing sections.",
    id: "separator",
    preview: (
      <div className="flex w-full max-w-xs flex-col gap-4">
        <Button className="w-full" variant="outline">
          Continue with Email
        </Button>
        <Marker variant="separator">
          <MarkerContent>OR</MarkerContent>
        </Marker>
        <Button className="w-full" variant="outline">
          Continue with Google
        </Button>
      </div>
    ),
    title: "Separator",
  },
];
