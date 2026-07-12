import type { Config } from 'tailwindcss';
import { colors, radius, shadows, spacing, transitions, typography } from './constants/tokens';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './sections/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        foreground: colors.foreground,
        secondaryText: colors.secondary,
        muted: colors.muted,
        accent: colors.accent,
        border: colors.border,
        card: colors.card,
        darkBackground: colors.darkBackground,
        darkForeground: colors.darkForeground
      },
      spacing,
      borderRadius: radius,
      boxShadow: shadows,
      fontFamily: {
        sans: typography.sans.split(', '),
        mono: typography.mono.split(', ')
      },
      transitionDuration: {
        fast: '180ms',
        normal: '250ms',
        slow: '400ms'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
} satisfies Config;
