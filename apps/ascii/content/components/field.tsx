import { DemoRow } from "@/components/ascii/component-docs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
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
    {
      title: "example",
      code: `<Field>
  <FieldLabel htmlFor="region">Region</FieldLabel>
  <FieldControl>
    <NativeSelect id="region" chWidth={36} defaultValue="iad1">
      <option value="iad1">iad1 — Washington</option>
      <option value="fra1">fra1 — Frankfurt</option>
    </NativeSelect>
  </FieldControl>
  <FieldDescription>Where the primary database lives.</FieldDescription>
</Field>

<Field>
  <FieldLabel htmlFor="notes">Notes</FieldLabel>
  <FieldControl>
    <Textarea id="notes" chWidth={36} rows={3} placeholder="Optional context..." />
  </FieldControl>
</Field>

<Field>
  <FieldLabel>
    <Checkbox defaultChecked /> Email me on deploy failures
  </FieldLabel>
  <FieldDescription>Sent to sam@example.com.</FieldDescription>
</Field>`,
      preview: (
        <>
          <DemoRow label="select">
            <Field>
              <FieldLabel htmlFor="field-region">Region</FieldLabel>
              <FieldControl>
                <NativeSelect
                  chWidth={36}
                  defaultValue="iad1"
                  id="field-region"
                >
                  <option value="iad1">iad1 — Washington</option>
                  <option value="fra1">fra1 — Frankfurt</option>
                </NativeSelect>
              </FieldControl>
              <FieldDescription>
                Where the primary database lives.
              </FieldDescription>
            </Field>
          </DemoRow>
          <DemoRow label="textarea">
            <Field>
              <FieldLabel htmlFor="field-notes">Notes</FieldLabel>
              <FieldControl>
                <Textarea
                  chWidth={36}
                  id="field-notes"
                  placeholder="Optional context..."
                  rows={3}
                />
              </FieldControl>
            </Field>
          </DemoRow>
          <DemoRow label="checkbox">
            <Field>
              <FieldLabel className="text-foreground normal-case tracking-normal">
                <Checkbox defaultChecked /> Email me on deploy failures
              </FieldLabel>
              <FieldDescription>Sent to sam@example.com.</FieldDescription>
            </Field>
          </DemoRow>
        </>
      ),
    },
  ],
};
