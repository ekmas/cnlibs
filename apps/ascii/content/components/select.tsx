import { DemoRow } from "@/components/ascii/component-docs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Select",
  description: "Pick an option from a list.",
  sections: [
    {
      title: "example",
      code: `<Select defaultValue="next">
  <SelectTrigger chWidth={30}>
    <SelectValue placeholder="Framework" />
  </SelectTrigger>
  <SelectContent chWidth={30}>
    <SelectItem value="next">Next.js</SelectItem>
    <SelectItem value="nuxt">Nuxt</SelectItem>
    <SelectItem value="sveltekit">SvelteKit</SelectItem>
    <SelectItem value="remix">Remix</SelectItem>
  </SelectContent>
</Select>`,
      preview: (
        <Select defaultValue="next">
          <SelectTrigger chWidth={30}>
            <SelectValue placeholder="Framework" />
          </SelectTrigger>
          <SelectContent chWidth={30}>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="nuxt">Nuxt</SelectItem>
            <SelectItem value="sveltekit">SvelteKit</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      title: "variants",
      code: `<Select defaultValue="iad1">
  <SelectTrigger chWidth={30}>
    <SelectValue placeholder="Region" />
  </SelectTrigger>
  <SelectContent chWidth={30}>
    <SelectGroup>
      <SelectLabel>Americas</SelectLabel>
      <SelectItem value="iad1">iad1 — Washington</SelectItem>
      <SelectItem value="sfo1">sfo1 — San Francisco</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="fra1">fra1 — Frankfurt</SelectItem>
      <SelectItem value="lhr1" disabled>lhr1 — London (full)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

<SelectContent chWidth={30} side="top">...</SelectContent>`,
      preview: (
        <>
          <DemoRow label="grouped">
            <Select defaultValue="iad1">
              <SelectTrigger chWidth={30}>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent chWidth={30}>
                <SelectGroup>
                  <SelectLabel>Americas</SelectLabel>
                  <SelectItem value="iad1">iad1 — Washington</SelectItem>
                  <SelectItem value="sfo1">sfo1 — San Francisco</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="fra1">fra1 — Frankfurt</SelectItem>
                  <SelectItem disabled value="lhr1">
                    lhr1 — London (full)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </DemoRow>
          <DemoRow label="opens up">
            <Select defaultValue="next">
              <SelectTrigger chWidth={30}>
                <SelectValue placeholder="Framework" />
              </SelectTrigger>
              <SelectContent chWidth={30} side="top">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="nuxt">Nuxt</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
              </SelectContent>
            </Select>
          </DemoRow>
        </>
      ),
    },
    {
      title: "states",
      code: `<Select defaultValue="locked" disabled>
  <SelectTrigger chWidth={30}>
    <SelectValue />
  </SelectTrigger>
  <SelectContent chWidth={30}>
    <SelectItem value="locked">Managed by org</SelectItem>
  </SelectContent>
</Select>`,
      preview: (
        <DemoRow label="disabled">
          <Select defaultValue="locked" disabled>
            <SelectTrigger aria-label="Locked" chWidth={30}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent chWidth={30}>
              <SelectItem value="locked">Managed by org</SelectItem>
            </SelectContent>
          </Select>
        </DemoRow>
      ),
    },
  ],
};
