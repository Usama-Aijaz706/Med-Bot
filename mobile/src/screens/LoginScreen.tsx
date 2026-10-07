import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthHeader } from '@/components/auth/AuthHeader';
import { SocialButton } from '@/components/auth/SocialButton';
import { TextField } from '@/components/auth/TextField';
import { OrganicBackdrop } from '@/components/decor/OrganicBackdrop';
import {
  AppleMark,
  CheckGlyph,
  EyeGlyph,
  EyeOffGlyph,
  GoogleMark,
  LockGlyph,
  MailGlyph,
} from '@/components/icons/AuthGlyphs';
import { PillButton } from '@/components/ui/PillButton';
import { colors, fonts, spacing, type } from '@/theme';

export function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <LinearGradient
        colors={[colors.white, colors.background, colors.backgroundMid]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      <OrganicBackdrop variant="onboarding" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.content,
            { paddingTop: insets.top + 18, paddingBottom: Math.max(insets.bottom, 16) + 8 },
          ]}
        >
          <AuthHeader />

          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Log in to continue your health journey.</Text>

          <View style={styles.form}>
            <TextField
              label="Email address"
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoComplete="email"
              icon={<MailGlyph />}
            />
            <TextField
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              autoComplete="password"
              icon={<LockGlyph />}
              trailing={
                <Pressable
                  onPress={() => setShowPassword((value) => !value)}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffGlyph /> : <EyeGlyph />}
                </Pressable>
              }
            />

            <View style={styles.metaRow}>
              <Pressable
                onPress={() => setRemember((value) => !value)}
                style={styles.remember}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: remember }}
              >
                <View style={[styles.checkbox, remember && styles.checkboxOn]}>
                  {remember ? <CheckGlyph /> : null}
                </View>
                <Text style={styles.rememberLabel}>Remember me</Text>
              </Pressable>
              <Pressable hitSlop={8} accessibilityRole="button">
                <Text style={styles.forgot}>Forgot password?</Text>
              </Pressable>
            </View>

            <PillButton label="Log In" fullWidth onPress={() => undefined} />
          </View>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>or</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.social}>
            <SocialButton label="Continue with Google" icon={<GoogleMark />} onPress={() => undefined} />
            <SocialButton label="Continue with Apple" icon={<AppleMark />} onPress={() => undefined} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account? </Text>
            <Pressable onPress={() => router.push('/signup')} accessibilityRole="button">
              <Text style={styles.footerLink}>Sign Up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.screen,
  },
  title: {
    ...type.title,
    fontSize: 30,
    marginTop: 28,
    color: colors.navy,
  },
  subtitle: {
    ...type.body,
    color: colors.textSecondary,
    marginTop: 6,
    marginBottom: 22,
  },
  form: {
    gap: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -4,
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.6,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: {
    backgroundColor: colors.primary,
  },
  rememberLabel: {
    fontFamily: fonts.medium,
    fontSize: 13,
    color: colors.textSecondary,
  },
  forgot: {
    fontFamily: fonts.semiBold,
    fontSize: 13,
    color: colors.primary,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 22,
    marginBottom: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.fieldBorder,
  },
  or: {
    fontFamily: fonts.medium,
    fontSize: 13,
    color: colors.textMuted,
  },
  social: {
    gap: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 28,
  },
  footerText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textMuted,
  },
  footerLink: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.primary,
  },
});
