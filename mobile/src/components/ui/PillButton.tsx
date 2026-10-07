import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fonts, radii, type } from '@/theme';

type PillButtonProps = {
  label: string;
  onPress: () => void;
  showArrow?: boolean;
  fullWidth?: boolean;
};

export function PillButton({ label, onPress, showArrow = false, fullWidth = false }: PillButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, fullWidth && styles.fullWidth, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
      {showArrow ? <Text style={styles.arrow}>→</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 22,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 6,
  },
  fullWidth: {
    alignSelf: 'stretch',
    minHeight: 52,
    width: '100%',
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  label: {
    ...type.button,
    color: colors.white,
  },
  arrow: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
    marginTop: -1,
  },
});
