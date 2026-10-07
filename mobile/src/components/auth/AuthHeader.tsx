import { StyleSheet, Text, View } from 'react-native';

import { BrandMark } from '@/components/brand/BrandMark';
import { colors, fonts, type } from '@/theme';

export function AuthHeader() {
  return (
    <View style={styles.row}>
      <BrandMark size={36} elevated={false} />
      <View>
        <Text style={styles.brand}>Medbot</Text>
        <Text style={styles.tag}>Your Health Companion</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brand: {
    fontFamily: fonts.extraBold,
    fontSize: 18,
    letterSpacing: -0.3,
    color: colors.navy,
  },
  tag: {
    ...type.caption,
    color: colors.textMuted,
    marginTop: 1,
  },
});
