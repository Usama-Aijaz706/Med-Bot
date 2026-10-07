import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme';

type PaginationDotsProps = {
  count: number;
  index: number;
};

export function PaginationDots({ count, index }: PaginationDotsProps) {
  return (
    <View style={styles.row} accessibilityRole="progressbar">
      {Array.from({ length: count }).map((_, i) => (
        <View key={i} style={[styles.dot, i === index ? styles.active : styles.idle]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  active: {
    backgroundColor: colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  idle: {
    backgroundColor: colors.dotInactive,
  },
});
