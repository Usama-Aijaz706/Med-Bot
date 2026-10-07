import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, radii, type } from '@/theme';

type SocialButtonProps = {
  label: string;
  icon: ReactNode;
  onPress: () => void;
};

export function SocialButton({ label, icon, onPress }: SocialButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: radii.pill,
    borderWidth: 1.5,
    borderColor: colors.fieldBorder,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  pressed: {
    opacity: 0.88,
    backgroundColor: colors.background,
  },
  label: {
    ...type.button,
    color: colors.navy,
  },
});
