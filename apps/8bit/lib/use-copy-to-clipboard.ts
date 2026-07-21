"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCopyToClipboard(
  value: string,
  timeoutMs = 2000
): [boolean, () => void] {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const copy = useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), timeoutMs);
    });
  }, [value, timeoutMs]);

  return [copied, copy];
}
