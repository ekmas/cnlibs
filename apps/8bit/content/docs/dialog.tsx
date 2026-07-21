import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Dialog";
export const description =
  "A window overlaid on either the primary window or another dialog window.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/dialog",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Show Dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    description:
      "A basic dialog with a header, description, and footer actions.",
    id: "default",
    preview: (
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Show Dialog</Button>}
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function DialogFormDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Edit Profile</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
          <FieldContent>
            <Input defaultValue="Evil Rabbit" id="dialog-name" />
          </FieldContent>
        </Field>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    description: "Compose Dialog with Field and Input to build a small form.",
    id: "form",
    preview: (
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Edit Profile</Button>}
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
            <FieldContent>
              <Input defaultValue="Evil Rabbit" id="dialog-name" />
            </FieldContent>
          </Field>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    title: "Form",
  },
];
