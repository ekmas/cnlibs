import { THEME_COLOR_KEYS, type ThemeCssVars } from "@/registry/themes";

function varsBlock(selector: string, vars: Record<string, string>): string {
  const lines = Object.entries(vars).map(
    ([key, value]) => `  --${key}: ${value};`
  );
  return `${selector} {\n${lines.join("\n")}\n}`;
}

/** Renders a theme's cssVars as plain, paste-into-globals.css text: a :root
 * block (theme-level vars plus light colors) and a .dark block. */
export function themeCssVarsToText(cssVars: ThemeCssVars): string {
  const rootVars: Record<string, string> = { ...cssVars.theme };
  const darkVars: Record<string, string> = {};

  for (const key of THEME_COLOR_KEYS) {
    const light = cssVars.light[key];
    if (light) {
      rootVars[key] = light;
    }
    const dark = cssVars.dark[key];
    if (dark) {
      darkVars[key] = dark;
    }
  }

  return `${varsBlock(":root", rootVars)}\n\n${varsBlock(".dark", darkVars)}`;
}
