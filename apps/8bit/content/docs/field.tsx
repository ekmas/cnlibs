import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Field";
export const description =
  "A form field with a label, control, and validation message.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/field",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>Update your public profile information.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-name">Name</FieldLabel>
          <Input id="field-name" placeholder="Evil Rabbit" />
          <FieldDescription>This is your public display name.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-email">Email</FieldLabel>
          <Input id="field-email" placeholder="you@example.com" type="email" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}`,
    description:
      "Group related fields with FieldSet, FieldLegend, and FieldGroup.",
    id: "default",
    preview: (
      <FieldSet className="w-full max-w-md">
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>
          Update your public profile information.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">Name</FieldLabel>
            <Input id="field-name" placeholder="Evil Rabbit" />
            <FieldDescription>
              This is your public display name.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input
              id="field-email"
              placeholder="you@example.com"
              type="email"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    ),
    title: "Default",
  },
  {
    code: `import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldInvalidDemo() {
  return (
    <Field className="w-full max-w-md" data-invalid="true">
      <FieldLabel htmlFor="field-email-invalid">Email</FieldLabel>
      <Input
        aria-invalid
        id="field-email-invalid"
        placeholder="you@example.com"
        type="email"
      />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  );
}`,
    description:
      "Set data-invalid on Field and render FieldError to surface a validation message.",
    id: "invalid",
    preview: (
      <Field className="w-full max-w-md" data-invalid="true">
        <FieldLabel htmlFor="field-email-invalid">Email</FieldLabel>
        <Input
          aria-invalid
          id="field-email-invalid"
          placeholder="you@example.com"
          type="email"
        />
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    ),
    title: "Invalid",
  },
];
