import { DemoRow } from "@/components/ascii/component-docs";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

const sixSlots = [0, 1, 2, 3, 4, 5];
const fourSlots = [0, 1, 2, 3];

export const doc: ComponentDoc = {
  title: "Input OTP",
  description: "Accessible one-time password input.",
  sections: [
    {
      title: "variants",
      code: `<InputOTP length={6}>
  {Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot key={i} index={i} />
  ))}
</InputOTP>`,
      preview: (
        <>
          <DemoRow label="6 digits">
            <div className="flex flex-col">
              <Label htmlFor="otp-code-0">Verification code</Label>
              <InputOTP id="otp-code" length={6}>
                {sixSlots.map((slot) => (
                  <InputOTPSlot index={slot} key={slot} />
                ))}
              </InputOTP>
            </div>
          </DemoRow>
          <DemoRow label="4 digits">
            <InputOTP aria-label="PIN" length={4}>
              {fourSlots.map((slot) => (
                <InputOTPSlot index={slot} key={slot} />
              ))}
            </InputOTP>
          </DemoRow>
        </>
      ),
    },
  ],
};
