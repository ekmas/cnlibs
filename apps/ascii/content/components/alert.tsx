import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Alert",
  description: "A callout for user attention.",
  sections: [
    {
      title: "variants",
      code: `<Alert width={44}>
  <AlertTitle>Deployment queued</AlertTitle>
  <AlertDescription>Your changes will go live in a few minutes.</AlertDescription>
</Alert>

<Alert variant="destructive" width={44}>
  <AlertTitle>[!] Low disk space</AlertTitle>
  <AlertDescription>12% free — clear the build cache to continue.</AlertDescription>
</Alert>`,
      preview: (
        <>
          <Alert width={44}>
            <AlertTitle>Deployment queued</AlertTitle>
            <AlertDescription>
              Your changes will go live in a few minutes.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" width={44}>
            <AlertTitle>[!] Low disk space</AlertTitle>
            <AlertDescription>
              12% free — clear the build cache to continue.
            </AlertDescription>
          </Alert>
        </>
      ),
    },
  ],
};
