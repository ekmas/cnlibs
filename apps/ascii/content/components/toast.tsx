import { ToastDemo } from "./demos/toast-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Toast",
  description: "A succinct, temporary notification.",
  sections: [
    {
      title: "variants",
      code: `const toastManager = ToastPrimitive.useToastManager()

toastManager.add({ title: "Deployment queued", description: "..." })
toastManager.add({ type: "success", title: "Deployment live" })
toastManager.add({ type: "error", title: "Build failed" })`,
      preview: <ToastDemo />,
    },
  ],
};
