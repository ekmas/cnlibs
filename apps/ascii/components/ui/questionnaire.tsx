import * as React from "react";

import { cn } from "@/lib/utils";

function Questionnaire({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

/** "Step X of Y" text plus a `[####------]`-style progress bar. */
function QuestionnaireProgress({
  step,
  total,
  className,
}: {
  step: number;
  total: number;
  width?: number;
  className?: string;
}) {
  const width = 20;
  const filled = Math.round((step / total) * width);

  return (
    <div
      data-slot="questionnaire-progress"
      className={cn(
        "flex items-center justify-between text-ascii-comment",
        className
      )}
    >
      <span className="uppercase tracking-[0.04em]">
        Step {step} of {total}
      </span>
      <span aria-hidden className="text-primary select-none">
        {`[${"#".repeat(filled)}${"-".repeat(width - filled)}]`}
      </span>
    </div>
  );
}

function QuestionnaireStep({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-step"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function QuestionnaireQuestion({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-question"
      className={cn("my-[1lh] font-weight-heading text-foreground", className)}
      {...props}
    />
  );
}

function QuestionnaireOptions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-options"
      role="radiogroup"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function QuestionnaireOption({
  className,
  selected = false,
  ...props
}: React.ComponentProps<"button"> & { selected?: boolean }) {
  return (
    <button
      type="button"
      data-slot="questionnaire-option"
      role="radio"
      aria-checked={selected}
      data-selected={selected || undefined}
      className={cn(
        "flex items-center gap-[1ch] px-[2ch] text-left text-ascii-soft outline-none",
        "hover:text-foreground focus-visible:text-foreground",
        "data-selected:text-primary data-selected:font-weight-heading",
        className
      )}
      {...props}
    >
      <span aria-hidden className="shrink-0 select-none">
        [{selected ? "x" : " "}]
      </span>
      <span className="min-w-0 flex-1 truncate">{props.children}</span>
    </button>
  );
}

function QuestionnaireFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-footer"
      className={cn("flex items-center justify-between pt-[1lh]", className)}
      {...props}
    />
  );
}

export {
  Questionnaire,
  QuestionnaireFooter,
  QuestionnaireOption,
  QuestionnaireOptions,
  QuestionnaireProgress,
  QuestionnaireQuestion,
  QuestionnaireStep,
};
