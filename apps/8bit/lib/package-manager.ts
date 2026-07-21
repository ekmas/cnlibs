"use client";

import { useSyncExternalStore } from "react";

export const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

const STORAGE_KEY = "8bit-package-manager";
const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm";

const listeners = new Set<() => void>();
let cached: PackageManager | null = null;

function isPackageManager(value: string | null): value is PackageManager {
  return (
    value !== null && (PACKAGE_MANAGERS as readonly string[]).includes(value)
  );
}

function readStoredValue(): PackageManager {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isPackageManager(stored) ? stored : DEFAULT_PACKAGE_MANAGER;
}

function getSnapshot(): PackageManager {
  cached ??= readStoredValue();
  return cached;
}

function getServerSnapshot(): PackageManager {
  return DEFAULT_PACKAGE_MANAGER;
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

/** Persists the user's preferred package manager across every docs page. */
export function setPackageManager(next: PackageManager) {
  cached = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  for (const listener of listeners) {
    listener();
  }
}

export function usePackageManager(): [
  PackageManager,
  (next: PackageManager) => void,
] {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [value, setPackageManager];
}
