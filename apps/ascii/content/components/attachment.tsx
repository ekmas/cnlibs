import { DemoRow } from "@/components/ascii/component-docs";
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
      title: "states",
      code: `<Attachment>
  <AttachmentIcon>[sh]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>deploy.sh</AttachmentName>
    <AttachmentMeta>2.1 KB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentDone />
</Attachment>

<Attachment>
  <AttachmentIcon>[gz]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>build-output.tar.gz</AttachmentName>
    <AttachmentMeta>18.4 MB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentProgress progress={62} />
</Attachment>

<Attachment>
  <AttachmentIcon>[log]</AttachmentIcon>
  <AttachmentContent>
    <AttachmentName>ci-run-4021.log</AttachmentName>
    <AttachmentMeta>640 KB</AttachmentMeta>
  </AttachmentContent>
  <AttachmentProgress progress={12} />
</Attachment>`,
      preview: (
        <>
          <DemoRow label="done">
            <Attachment className="w-full max-w-md">
              <AttachmentIcon>[sh]</AttachmentIcon>
              <AttachmentContent>
                <AttachmentName>deploy.sh</AttachmentName>
                <AttachmentMeta>2.1 KB</AttachmentMeta>
              </AttachmentContent>
              <AttachmentDone />
            </Attachment>
          </DemoRow>
          <DemoRow label="uploading">
            <Attachment className="w-full max-w-md">
              <AttachmentIcon>[gz]</AttachmentIcon>
              <AttachmentContent>
                <AttachmentName>build-output.tar.gz</AttachmentName>
                <AttachmentMeta>18.4 MB</AttachmentMeta>
              </AttachmentContent>
              <AttachmentProgress progress={62} />
            </Attachment>
          </DemoRow>
          <DemoRow label="starting">
            <Attachment className="w-full max-w-md">
              <AttachmentIcon>[log]</AttachmentIcon>
              <AttachmentContent>
                <AttachmentName>ci-run-4021.log</AttachmentName>
                <AttachmentMeta>640 KB</AttachmentMeta>
              </AttachmentContent>
              <AttachmentProgress progress={12} />
            </Attachment>
          </DemoRow>
        </>
      ),
    },
  ],
};
