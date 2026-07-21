import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Alert";
export const description = "Displays a callout for user attention.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/alert",
};

export const variants: DocVariant[] = [
  {
    code: `import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <Alert className="w-full max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with an icon, a title, and a description.
      </AlertDescription>
    </Alert>
  );
}`,
    description: "A basic alert with an icon, title, and description.",
    id: "default",
    preview: (
      <Alert className="w-full max-w-md">
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with an icon, a title, and a description.
        </AlertDescription>
      </Alert>
    ),
    title: "Default",
  },
  {
    code: `import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructiveDemo() {
  return (
    <Alert className="w-full max-w-md" variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
}`,
    description: "Use the destructive variant to signal an error.",
    id: "destructive",
    preview: (
      <Alert className="w-full max-w-md" variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          Please verify your billing information and try again.
        </AlertDescription>
      </Alert>
    ),
    title: "Destructive",
  },
];
