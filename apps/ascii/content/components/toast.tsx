import { ToastDemo, ToastPromiseDemo } from "./demos/toast-demo";
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
    {
      title: "example",
      code: `toastManager.promise(deploy(), {
  loading: { title: "Deploying..." },
  success: (version) => ({ title: "Deployment live", description: version }),
  error: (error) => ({ title: "Deployment failed", description: error.message }),
})

toastManager.add({ title: "Sticky notice", timeout: 0 })`,
      preview: <ToastPromiseDemo />,
    },
  ],
};
