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
      title: "default",
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
      title: "grouped",
      description:
        "SelectGroup, SelectLabel and SelectSeparator organise long lists.",
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
</Select>`,
      preview: (
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
      ),
    },
    {
      title: "opens up",
      description: "side places the list above the trigger.",
      code: `<Select defaultValue="next">
  <SelectTrigger chWidth={30}>
    <SelectValue placeholder="Framework" />
  </SelectTrigger>
  <SelectContent chWidth={30} side="top">
    <SelectItem value="next">Next.js</SelectItem>
    <SelectItem value="nuxt">Nuxt</SelectItem>
    <SelectItem value="sveltekit">SvelteKit</SelectItem>
  </SelectContent>
</Select>`,
      preview: (
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
      ),
    },
    {
      title: "disabled",
      code: `<Select defaultValue="locked" disabled>
  <SelectTrigger chWidth={30}>
    <SelectValue />
  </SelectTrigger>
  <SelectContent chWidth={30}>
    <SelectItem value="locked">Managed by org</SelectItem>
  </SelectContent>
</Select>`,
      preview: (
        <Select defaultValue="locked" disabled>
          <SelectTrigger aria-label="Locked" chWidth={30}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent chWidth={30}>
            <SelectItem value="locked">Managed by org</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
  ],
};
