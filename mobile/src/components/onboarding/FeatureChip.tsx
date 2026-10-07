import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radii } from '@/theme';

type FeatureChipProps = {
  icon: ReactNode;
  label: string;
  offset?: number;
};

export function FeatureChip({ icon, label, offset = 0 }: FeatureChipProps) {
  return (
    <View style={[styles.chip, { marginLeft: offset }]}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.white,
    borderRadius: radii.pill,
    paddingVertical: 8,
    paddingHorizontal: 10,
    paddingRight: 14,
    shadowColor: '#163847',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    alignSelf: 'flex-start',
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.blobWash,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: colors.navy,
  },
});
