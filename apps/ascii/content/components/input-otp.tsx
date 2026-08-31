import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { InputOTPControlledDemo } from "./demos/input-otp-demo";
import type { ComponentDoc } from "./types";

const sixSlots = [0, 1, 2, 3, 4, 5];
const fourSlots = [0, 1, 2, 3];

export const doc: ComponentDoc = {
  title: "Input OTP",
  description: "Accessible one-time password input.",
  sections: [
    {
      title: "default",
      code: `<InputOTP length={6}>
  {Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: (
        <InputOTP aria-label="Verification code" length={6}>
          {sixSlots.map((slot) => (
            <InputOTPSlot index={slot} key={slot} />
          ))}
        </InputOTP>
      ),
    },
    {
      title: "with label",
      code: `<Label htmlFor="otp-code-0">Verification code</Label>
<InputOTP id="otp-code" length={6}>
  {Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: (
        <div className="flex flex-col">
          <Label htmlFor="otp-code-0">Verification code</Label>
          <InputOTP id="otp-code" length={6}>
            {sixSlots.map((slot) => (
              <InputOTPSlot index={slot} key={slot} />
            ))}
          </InputOTP>
        </div>
      ),
    },
    {
      title: "4 digits",
      description:
        "length sets the number of slots — render one InputOTPSlot per index.",
      code: `<InputOTP length={4} aria-label="PIN">
  {Array.from({ length: 4 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: (
        <InputOTP aria-label="PIN" length={4}>
          {fourSlots.map((slot) => (
            <InputOTPSlot index={slot} key={slot} />
          ))}
        </InputOTP>
      ),
    },
    {
      title: "controlled",
      code: `const [code, setCode] = React.useState("")

<InputOTP length={6} value={code} onValueChange={setCode}>
  {Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: <InputOTPControlledDemo />,
    },
    {
      title: "disabled",
      code: `<InputOTP length={6} defaultValue="482913" disabled>
  {Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: (
        <InputOTP
          aria-label="Locked code"
          defaultValue="482913"
          disabled
          length={6}
        >
          {sixSlots.map((slot) => (
            <InputOTPSlot index={slot} key={slot} />
          ))}
        </InputOTP>
      ),
    },
  ],
};
