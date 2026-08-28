import { Button } from "@/components/ui/button";
import {
  Dialog,
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
      title: "example",
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
    <Input id="email" chWidth={38} placeholder="sam@paper.design" />
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
              chWidth={38}
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
  ],
};
