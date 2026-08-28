import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Accordion",
  description: "Stacked sections, one open at a time.",
  sections: [
    {
      title: "example",
      code: `<Accordion defaultValue={["getting-started"]}>
  <AccordionItem value="getting-started">
    <AccordionTrigger>What is ASCII UI?</AccordionTrigger>
    <AccordionContent>
      A canvas design tool's component set, rebuilt in monospace type.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="installation">
    <AccordionTrigger>Installation</AccordionTrigger>
    <AccordionContent>
      Requirements: Next.js, Tailwind CSS v4, and shadcn/ui.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq">
    <AccordionTrigger>Billing &amp; plans</AccordionTrigger>
    <AccordionContent>
      This library is free and open — there is no billing.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      preview: (
        <div className="w-[44ch]">
          <Accordion defaultValue={["getting-started"]}>
            <AccordionItem value="getting-started">
              <AccordionTrigger>What is ASCII UI?</AccordionTrigger>
              <AccordionContent>
                A canvas design tool&apos;s component set, rebuilt in monospace
                type for real apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="installation">
              <AccordionTrigger>Installation</AccordionTrigger>
              <AccordionContent>
                Requirements: Next.js, Tailwind CSS v4, and shadcn/ui&apos;s
                base-nova preset.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq">
              <AccordionTrigger>Billing &amp; plans</AccordionTrigger>
              <AccordionContent>
                This library is free and open — there is no billing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      title: "variants",
      code: `<Accordion multiple defaultValue={["a", "b"]}>
  <AccordionItem value="a">
    <AccordionTrigger>Multiple open</AccordionTrigger>
    <AccordionContent>
      Pass multiple to keep several sections expanded.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>At the same time</AccordionTrigger>
    <AccordionContent>Like this one.</AccordionContent>
  </AccordionItem>
</Accordion>`,
      preview: (
        <div className="w-[44ch]">
          <Accordion defaultValue={["a", "b"]} multiple>
            <AccordionItem value="a">
              <AccordionTrigger>Multiple open</AccordionTrigger>
              <AccordionContent>
                Pass multiple to keep several sections expanded.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>At the same time</AccordionTrigger>
              <AccordionContent>Like this one.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
  ],
};
