import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Alert Dialog",
  description: "A modal that blocks the UI until the user responds.",
  sections: [
    {
      title: "default",
      code: `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive">Delete</Button>} />
  <AlertDialogContent chWidth={44}>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete project</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete ascii-ui and revoke every deploy
        key attached to it. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete project</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      preview: (
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button variant="destructive">Delete project</Button>}
          />
          <AlertDialogContent chWidth={44}>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete project</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete{" "}
                <span className="text-foreground">ascii-ui</span> and revoke
                every deploy key attached to it. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete project</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
    },
  ],
};
