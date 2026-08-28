import {
  Select,
  SelectContent,
  SelectItem,
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
  ],
};
