"use client";

import { useState } from "react";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

const sixSlots = [0, 1, 2, 3, 4, 5];

export function InputOTPControlledDemo() {
  const [code, setCode] = useState("");
  const complete = code.length === sixSlots.length;

  return (
    <div className="flex flex-col">
      <InputOTP
        aria-label="Recovery code"
        length={sixSlots.length}
        onValueChange={setCode}
        value={code}
      >
        {sixSlots.map((slot) => (
          <InputOTPSlot index={slot} key={slot} />
        ))}
      </InputOTP>
      <span className="text-ascii-comment">
        {complete ? (
          <>
            code: <span className="text-primary">{code}</span>
          </>
        ) : (
          `${code.length}/${sixSlots.length} digits`
        )}
      </span>
    </div>
  );
}
