import {
  ToastDemo,
  ToastErrorDemo,
  ToastPersistentDemo,
  ToastPromiseDemo,
  ToastSuccessDemo,
} from "./demos/toast-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Toast",
  description: "A succinct, temporary notification.",
  setup: {
    description:
      "Toasts are queued through a ToastProvider at the root of the tree and drawn by a single Toaster, which renders the queue in the top-right corner.",
    code: `// app/layout.tsx (inside <body>)
import { ToastProvider, Toaster } from "@/components/ui/toast";

<ToastProvider>
  {children}
  <Toaster />
</ToastProvider>`,
  },
  sections: [
    {
      title: "default",
      code: `const toastManager = ToastPrimitive.useToastManager()

toastManager.add({
  title: "Deployment queued",
  description: "main@a1b2c3d will build in ~40s.",
})`,
      preview: <ToastDemo />,
    },
    {
      title: "success",
      description: "type picks the tone; success renders in the primary color.",
      code: `toastManager.add({ type: "success", title: "Deployment live" })`,
      preview: <ToastSuccessDemo />,
    },
    {
      title: "error",
      code: `toastManager.add({ type: "error", title: "Build failed" })`,
      preview: <ToastErrorDemo />,
    },
    {
      title: "promise",
      description:
        "One toast that shows a spinner while pending, then updates when the promise settles.",
      code: `toastManager.promise(deploy(), {
  loading: { title: "Deploying..." },
  success: (version) => ({ title: "Deployment live", description: version }),
  error: (error) => ({ title: "Deployment failed", description: error.message }),
})`,
      preview: <ToastPromiseDemo />,
    },
    {
      title: "persistent",
      description: "timeout: 0 keeps a toast until it is dismissed.",
      code: `toastManager.add({ title: "Sticky notice", timeout: 0 })`,
      preview: <ToastPersistentDemo />,
    },
  ],
};
