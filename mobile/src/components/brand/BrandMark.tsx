import { StyleSheet, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { colors } from '@/theme';

type BrandMarkProps = {
  size?: number;
  elevated?: boolean;
};

export function BrandMark({ size = 92, elevated = true }: BrandMarkProps) {
  return (
    <View
      style={[
        elevated ? styles.shadow : undefined,
        { width: size, height: size, borderRadius: size * 0.25, backgroundColor: colors.primary },
      ]}
    >
      <Svg width={size} height={size} viewBox="0 0 96 96">
        <Rect width="96" height="96" rx="24" fill={colors.primary} />
        <Rect x="39" y="22" width="18" height="52" rx="7" fill={colors.white} />
        <Rect x="22" y="39" width="52" height="18" rx="7" fill={colors.white} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: colors.primary,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
    elevation: 10,
  },
});
