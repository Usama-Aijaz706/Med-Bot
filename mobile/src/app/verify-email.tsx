import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { OrganicBackdrop } from '@/components/decor/OrganicBackdrop';
import { colors, type } from '@/theme';

export default function VerifyEmailRoute() {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <LinearGradient
        colors={[colors.white, colors.background, colors.backgroundMid]}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      <OrganicBackdrop variant="onboarding" />
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.body}>This screen is next, designed to the same reference.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  title: {
    ...type.title,
    color: colors.navy,
  },
  body: {
    ...type.body,
    color: colors.textSecondary,
    marginTop: 10,
  },
});
