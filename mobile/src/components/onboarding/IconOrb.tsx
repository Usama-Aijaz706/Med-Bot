import { StyleSheet, View } from 'react-native';
import type { ReactNode } from 'react';

import { colors } from '@/theme';

type IconOrbProps = {
  children: ReactNode;
  size?: number;
  background?: string;
};

export function IconOrb({ children, size = 48, background = colors.white }: IconOrbProps) {
  return (
    <View
      style={[
        styles.orb,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: background,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  orb: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#163847',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
});
