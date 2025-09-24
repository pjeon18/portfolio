export const theme = {
  colors: {
    bg: 'hsl(240 10% 6%)',
    fg: 'hsl(0 0% 98%)',
    muted: 'hsl(240 4% 46%)',
    primaryFrom: 'hsl(192 95% 45%)',
    primaryTo: 'hsl(270 95% 60%)',
    accent: 'hsl(35 100% 55%)',
  },
  radius: { lg: '1.25rem', xl: '1.75rem' },
} as const;

export type Theme = typeof theme;

