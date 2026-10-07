export const fonts = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semiBold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extraBold: 'PlusJakartaSans_800ExtraBold',
} as const;

export const type = {
  brand: {
    fontFamily: fonts.extraBold,
    fontSize: 42,
    letterSpacing: -0.8,
    lineHeight: 50,
  },
  kicker: {
    fontFamily: fonts.medium,
    fontSize: 16,
    letterSpacing: -0.1,
    lineHeight: 22,
  },
  title: {
    fontFamily: fonts.extraBold,
    fontSize: 28,
    letterSpacing: -0.7,
    lineHeight: 34,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 15,
    letterSpacing: 0.1,
    lineHeight: 23,
  },
  caption: {
    fontFamily: fonts.medium,
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 18,
  },
  button: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
} as const;
