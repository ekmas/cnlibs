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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Dialog",
  description: "A window overlaid on the primary content.",
  sections: [
    {
      title: "default",
      code: `<Dialog>
  <DialogTrigger render={<Button>Invite teammate</Button>} />
  <DialogContent chWidth={44}>
    <DialogHeader>
      <DialogTitle>Invite teammate</DialogTitle>
      <DialogDescription>
        They'll get an email with a link to join this project.
      </DialogDescription>
    </DialogHeader>
    <Label htmlFor="email" className="mt-[1lh]">Email</Label>
    <Input id="email" chWidth={40} placeholder="sam@paper.design" />
    <DialogFooter showCloseButton>
      <Button>Send invite</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      preview: (
        <Dialog>
          <DialogTrigger render={<Button>Invite teammate</Button>} />
          <DialogContent chWidth={44}>
            <DialogHeader>
              <DialogTitle>Invite teammate</DialogTitle>
              <DialogDescription>
                They&apos;ll get an email with a link to join this project.
              </DialogDescription>
            </DialogHeader>
            <Label className="mt-[1lh]" htmlFor="dialog-email">
              Email
            </Label>
            <Input
              chWidth={40}
              id="dialog-email"
              placeholder="sam@paper.design"
            />
            <DialogFooter showCloseButton>
              <Button>Send invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      title: "compact",
      description:
        "A narrower frame without the [x]; DialogClose in the footer dismisses it.",
      code: `<Dialog>
  <DialogTrigger render={<Button variant="outline">Compact</Button>} />
  <DialogContent chWidth={36} showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Discard changes?</DialogTitle>
      <DialogDescription>Unsaved edits will be lost.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="ghost">Keep editing</Button>} />
      <DialogClose render={<Button variant="destructive">Discard</Button>} />
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      preview: (
        <Dialog>
          <DialogTrigger render={<Button variant="outline">Compact</Button>} />
          <DialogContent chWidth={36} showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Discard changes?</DialogTitle>
              <DialogDescription>Unsaved edits will be lost.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose
                render={<Button variant="ghost">Keep editing</Button>}
              />
              <DialogClose
                render={<Button variant="destructive">Discard</Button>}
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      title: "wide",
      description: "chWidth sets the frame width in characters (default 46).",
      code: `<Dialog>
  <DialogTrigger render={<Button variant="outline">Wide</Button>} />
  <DialogContent chWidth={60}>
    <DialogHeader>
      <DialogTitle>Release notes</DialogTitle>
      <DialogDescription>60 characters wide.</DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton />
  </DialogContent>
</Dialog>`,
      preview: (
        <Dialog>
          <DialogTrigger render={<Button variant="outline">Wide</Button>} />
          <DialogContent chWidth={60}>
            <DialogHeader>
              <DialogTitle>Release notes</DialogTitle>
              <DialogDescription>
                chWidth sets the frame width in characters — 60 here, 46 by
                default.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter showCloseButton />
          </DialogContent>
        </Dialog>
      ),
    },
  ],
};
