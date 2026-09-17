import type { ThemeScriptConfig } from '@meonode/ui'

/**
 * The one description of this app's themes.
 *
 * `ThemeProvider` renders from it, and the inline snippet in `index.html` reads
 * the same mode names and storage key. Nothing can check those two agree across
 * the HTML boundary, so they are written down here to be copied from.
 */
export const themeConfig = {
  modes: ['light', 'dark'],
  defaultMode: 'light',
  defaultPreference: 'system',
  system: { light: 'light', dark: 'dark' },
} satisfies ThemeScriptConfig

export default themeConfig
