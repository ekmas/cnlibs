import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Date Picker",
  description: "Date picker with range and preset support.",
  sections: [
    {
      title: "default",
      code: "<DatePicker defaultValue={new Date(2026, 7, 25)} />",
      preview: (
        <div className="flex flex-col">
          <Label htmlFor="date-picker-expires">Expires on</Label>
          <DatePicker
            defaultValue={
              new Date(new Date().getFullYear(), new Date().getMonth(), 25)
            }
            id="date-picker-expires"
          />
        </div>
      ),
    },
  ],
};
