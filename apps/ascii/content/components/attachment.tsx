import {
  Attachment,
  AttachmentContent,
  AttachmentDone,
  AttachmentIcon,
  AttachmentMeta,
  AttachmentName,
  AttachmentProgress,
} from "@/components/ui/attachment";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Attachment",
  description: "A file bundled with an upload progress state.",
  sections: [
    {
      title: "default",
      code: `<Attachment>
  <AttachmentIcon>[sh]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>deploy.sh</AttachmentName>
    <AttachmentMeta>2.1 KB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentDone />
</Attachment>`,
      preview: (
        <Attachment className="w-full max-w-md">
          <AttachmentIcon>[sh]</AttachmentIcon>
          <AttachmentContent>
            <AttachmentName>deploy.sh</AttachmentName>
            <AttachmentMeta>2.1 KB</AttachmentMeta>
          </AttachmentContent>
          <AttachmentDone />
        </Attachment>
      ),
    },
    {
      title: "uploading",
      description:
        "AttachmentProgress replaces the done mark while a file transfers.",
      code: `<Attachment>
  <AttachmentIcon>[gz]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>build-output.tar.gz</AttachmentName>
    <AttachmentMeta>18.4 MB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentProgress progress={62} />
</Attachment>`,
      preview: (
        <Attachment className="w-full max-w-md">
          <AttachmentIcon>[gz]</AttachmentIcon>
          <AttachmentContent>
            <AttachmentName>build-output.tar.gz</AttachmentName>
            <AttachmentMeta>18.4 MB</AttachmentMeta>
          </AttachmentContent>
          <AttachmentProgress progress={62} />
        </Attachment>
      ),
    },
    {
      title: "starting",
      code: `<Attachment>
  <AttachmentIcon>[log]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>ci-run-4021.log</AttachmentName>
    <AttachmentMeta>640 KB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentProgress progress={12} />
</Attachment>`,
      preview: (
        <Attachment className="w-full max-w-md">
          <AttachmentIcon>[log]</AttachmentIcon>
          <AttachmentContent>
            <AttachmentName>ci-run-4021.log</AttachmentName>
            <AttachmentMeta>640 KB</AttachmentMeta>
          </AttachmentContent>
          <AttachmentProgress progress={12} />
        </Attachment>
      ),
    },
  ],
};
