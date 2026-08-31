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
      title: "default",
      code: `<Accordion defaultValue={["getting-started"]}>
  <AccordionItem value="getting-started">
    <AccordionTrigger>What is ascii?</AccordionTrigger>
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
              <AccordionTrigger>What is ascii?</AccordionTrigger>
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
      title: "multiple",
      description: "multiple keeps several sections expanded at once.",
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
    {
      title: "disabled item",
      code: `<Accordion defaultValue={["logs"]}>
  <AccordionItem value="logs">
    <AccordionTrigger>Build logs</AccordionTrigger>
    <AccordionContent>Compiled in 1.2s.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="artifacts" disabled>
    <AccordionTrigger>Artifacts (none yet)</AccordionTrigger>
    <AccordionContent>Artifacts appear once the build finishes.</AccordionContent>
  </AccordionItem>
</Accordion>`,
      preview: (
        <div className="w-[44ch]">
          <Accordion defaultValue={["logs"]}>
            <AccordionItem value="logs">
              <AccordionTrigger>Build logs</AccordionTrigger>
              <AccordionContent>Compiled in 1.2s.</AccordionContent>
            </AccordionItem>
            <AccordionItem disabled value="artifacts">
              <AccordionTrigger>Artifacts (none yet)</AccordionTrigger>
              <AccordionContent>
                Artifacts appear once the build finishes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
  ],
};
