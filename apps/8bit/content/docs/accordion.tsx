import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Accordion";
export const description =
  "A vertically stacked set of interactive headings that each reveal a section of content.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/accordion",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the 8bit aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Panels animate open and closed by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    description:
      "Only one item can be open at a time. Set defaultValue to expand an item initially.",
    id: "default",
    preview: (
      <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the 8bit aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Panels animate open and closed by default.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    title: "Default",
  },
  {
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionMultipleDemo() {
  return (
    <Accordion
      className="w-full max-w-md"
      defaultValue={["item-1", "item-2"]}
      multiple
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. Pass the multiple prop to allow more than one item open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does state persist?</AccordionTrigger>
        <AccordionContent>
          Each item tracks its own open state independently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    description:
      "Pass the multiple prop to allow more than one item to be open at the same time.",
    id: "multiple",
    preview: (
      <Accordion
        className="w-full max-w-md"
        defaultValue={["item-1", "item-2"]}
        multiple
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
          <AccordionContent>
            Yes. Pass the multiple prop to allow more than one item open at
            once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Does state persist?</AccordionTrigger>
          <AccordionContent>
            Each item tracks its own open state independently.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    title: "Multiple",
  },
  {
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDisabledDemo() {
  return (
    <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Available item</AccordionTrigger>
        <AccordionContent>This item can be toggled normally.</AccordionContent>
      </AccordionItem>
      <AccordionItem disabled value="item-2">
        <AccordionTrigger>Disabled item</AccordionTrigger>
        <AccordionContent>You should not be able to open this.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    description: "Set disabled on an item to prevent it from being toggled.",
    id: "disabled",
    preview: (
      <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Available item</AccordionTrigger>
          <AccordionContent>
            This item can be toggled normally.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled value="item-2">
          <AccordionTrigger>Disabled item</AccordionTrigger>
          <AccordionContent>
            You should not be able to open this.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    title: "Disabled",
  },
];
