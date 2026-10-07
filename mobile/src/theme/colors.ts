/**
 * Medbot visual language, sampled from the product reference UI.
 * Mint surfaces, jade brand, and deep ink type.
 */
export const colors = {
  background: '#F4FBF8',
  backgroundMid: '#EEF8F4',
  backgroundDeep: '#E7F5F0',
  surface: '#FFFFFF',

  primary: '#1AAE75',
  primaryDark: '#158F61',
  primarySoft: '#7ED9B8',
  primaryGlow: 'rgba(26, 174, 117, 0.22)',

  blob: '#C6EBDE',
  blobDeep: '#B5E4D4',
  blobFog: '#D7F3EA',
  blobWash: '#E4F7F0',

  ink: '#163847',
  navy: '#122A43',
  text: '#1A3344',
  textSecondary: '#5C7380',
  textMuted: '#8A9BA4',

  heartbeat: '#8ED9C4',
  white: '#FFFFFF',
  overlay: 'rgba(22, 56, 71, 0.04)',

  visor: '#14343F',
  visorGlow: '#5EEAD4',
  robot: '#F7FBFC',
  robotEdge: '#D7E6EB',
  dotInactive: '#D4E5DC',
  chip: '#FFFFFF',
  phoneScreen: '#F3FAF7',
  fieldBorder: '#E3EEE8',
  fieldBorderFocus: '#1AAE75',
} as const;

export type ColorName = keyof typeof colors;
