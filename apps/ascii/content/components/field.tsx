import { DemoRow } from "@/components/ascii/component-docs";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Field",
  description: "A label + control + help text primitive.",
  sections: [
    {
      title: "variants",
      code: `<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <FieldControl>
    <Input id="email" type="email" chWidth={36} defaultValue="sam@example.com" />
  </FieldControl>
  <FieldDescription>Used for sign-in and receipts.</FieldDescription>
</Field>

<Field>
  <FieldLabel htmlFor="password">Password</FieldLabel>
  <FieldControl>
    <Input id="password" type="password" chWidth={36} defaultValue="short" aria-invalid />
  </FieldControl>
  <FieldError>Password must be at least 8 characters.</FieldError>
</Field>`,
      preview: (
        <>
          <DemoRow label="with help">
            <Field>
              <FieldLabel htmlFor="field-email">Email</FieldLabel>
              <FieldControl>
                <Input
                  chWidth={36}
                  defaultValue="sam@example.com"
                  id="field-email"
                  type="email"
                />
              </FieldControl>
              <FieldDescription>
                Used for sign-in and receipts.
              </FieldDescription>
            </Field>
          </DemoRow>
          <DemoRow label="with error">
            <Field>
              <FieldLabel htmlFor="field-password">Password</FieldLabel>
              <FieldControl>
                <Input
                  aria-invalid
                  chWidth={36}
                  defaultValue="short"
                  id="field-password"
                  type="password"
                />
              </FieldControl>
              <FieldError>Password must be at least 8 characters.</FieldError>
            </Field>
          </DemoRow>
        </>
      ),
    },
  ],
};
