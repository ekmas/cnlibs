import { cn } from "@/lib/utils";

type SpinnerCell =
  | { id: string; kind: "empty" }
  | { id: string; kind: "ring"; delay: string };

// Row-major layout for a 5x5 grid: the 4 corners are cut to approximate a
// circle and the center is left empty, so only the 12 perimeter pixels form
// a hollow ring. Each one fades out over a trailing tail (see
// animate-pixel-spin-dot), and the negative animation-delay staggers them so
// the lit pixels read as one line sweeping counter-clockwise around the ring.
const SPINNER_CELLS: SpinnerCell[] = [
  { id: "r0c0", kind: "empty" },
  { id: "r0c1", kind: "ring", delay: "-825ms" },
  { id: "r0c2", kind: "ring", delay: "-750ms" },
  { id: "r0c3", kind: "ring", delay: "-675ms" },
  { id: "r0c4", kind: "empty" },
  { id: "r1c0", kind: "ring", delay: "0ms" },
  { id: "r1c1", kind: "empty" },
  { id: "r1c2", kind: "empty" },
  { id: "r1c3", kind: "empty" },
  { id: "r1c4", kind: "ring", delay: "-600ms" },
  { id: "r2c0", kind: "ring", delay: "-75ms" },
  { id: "r2c1", kind: "empty" },
  { id: "r2c2", kind: "empty" },
  { id: "r2c3", kind: "empty" },
  { id: "r2c4", kind: "ring", delay: "-525ms" },
  { id: "r3c0", kind: "ring", delay: "-150ms" },
  { id: "r3c1", kind: "empty" },
  { id: "r3c2", kind: "empty" },
  { id: "r3c3", kind: "empty" },
  { id: "r3c4", kind: "ring", delay: "-450ms" },
  { id: "r4c0", kind: "empty" },
  { id: "r4c1", kind: "ring", delay: "-225ms" },
  { id: "r4c2", kind: "ring", delay: "-300ms" },
  { id: "r4c3", kind: "ring", delay: "-375ms" },
  { id: "r4c4", kind: "empty" },
];

function Spinner({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("grid size-5 grid-cols-5 grid-rows-5", className)}
      {...props}
    >
      {SPINNER_CELLS.map((cell) =>
        cell.kind === "empty" ? (
          <span aria-hidden="true" key={cell.id} />
        ) : (
          <span
            className="animate-pixel-spin-dot bg-foreground"
            key={cell.id}
            style={{ animationDelay: cell.delay }}
          />
        )
      )}
    </span>
  );
}

export { Spinner };
