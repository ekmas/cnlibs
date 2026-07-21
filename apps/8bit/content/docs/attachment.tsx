import { FileTextIcon, ImageIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Spinner } from "@/components/ui/spinner";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Attachment";
export const description =
  "Displays a file attachment with a preview, name, and actions.";

export const variants: DocVariant[] = [
  {
    code: `import { FileTextIcon, ImageIcon, XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";

export function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>invoice.pdf</AttachmentTitle>
          <AttachmentDescription>128 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove attachment">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>photo.png</AttachmentTitle>
          <AttachmentDescription>Upload failed</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove attachment">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  );
}`,
    description: "A finished attachment next to one that failed to upload.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-md flex-col gap-2">
        <Attachment>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>invoice.pdf</AttachmentTitle>
            <AttachmentDescription>128 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove attachment">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment state="error">
          <AttachmentMedia>
            <ImageIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>photo.png</AttachmentTitle>
            <AttachmentDescription>Upload failed</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove attachment">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </div>
    ),
    title: "Default",
  },
  {
    code: `import { XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Spinner } from "@/components/ui/spinner";

export function AttachmentUploadingDemo() {
  return (
    <Attachment className="w-full max-w-md" state="uploading">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>presentation.key</AttachmentTitle>
        <AttachmentDescription>Uploading...</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Cancel upload">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  );
}`,
    description: "Set state to uploading to show a pending indicator.",
    id: "uploading",
    preview: (
      <Attachment className="w-full max-w-md" state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>presentation.key</AttachmentTitle>
          <AttachmentDescription>Uploading...</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    ),
    title: "Uploading",
  },
];
