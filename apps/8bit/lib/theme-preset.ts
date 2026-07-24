"use client";

import { useSyncExternalStore } from "react";
import { THEMES } from "@/registry/themes";

export const DEFAULT_THEME_PRESET = "default";

const STORAGE_KEY = "8bit-theme-preset";
const VALID_SLUGS = new Set([
  DEFAULT_THEME_PRESET,
  ...THEMES.map((theme) => theme.slug),
]);

const listeners = new Set<() => void>();
let cached: string | null = null;

function isThemePreset(value: string | null): value is string {
  return value !== null && VALID_SLUGS.has(value);
}

function readStoredValue(): string {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isThemePreset(stored) ? stored : DEFAULT_THEME_PRESET;
}

function getSnapshot(): string {
  cached ??= readStoredValue();
  return cached;
}

function getServerSnapshot(): string {
  return DEFAULT_THEME_PRESET;
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cached = null;
      onStoreChange();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Persists the user's selected /theme preview theme across refreshes. */
export function setThemePreset(next: string) {
  cached = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  for (const listener of listeners) {
    listener();
  }
}

export function useThemePreset(): [string, (next: string) => void] {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [value, setThemePreset];
}
