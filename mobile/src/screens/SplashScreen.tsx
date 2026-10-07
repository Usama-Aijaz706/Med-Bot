import { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import { BrandMark } from '@/components/brand/BrandMark';
import { HeartbeatLine } from '@/components/decor/HeartbeatLine';
import { OrganicBackdrop } from '@/components/decor/OrganicBackdrop';
import { colors, spacing, type } from '@/theme';

export function SplashScreen() {
  const router = useRouter();
  const didAdvance = useRef(false);
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.88)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleShift = useRef(new Animated.Value(12)).current;
  const tagOpacity = useRef(new Animated.Value(0)).current;
  const lineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeUp = (opacity: Animated.Value, shift?: Animated.Value, delay = 0) =>
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 520,
          delay,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        shift
          ? Animated.timing(shift, {
              toValue: 0,
              duration: 520,
              delay,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: true,
            })
          : Animated.delay(0),
      ]);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 560,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 7,
          tension: 68,
          useNativeDriver: true,
        }),
      ]),
      fadeUp(titleOpacity, titleShift),
      fadeUp(tagOpacity, undefined, 40),
      Animated.timing(lineOpacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [lineOpacity, logoOpacity, logoScale, tagOpacity, titleOpacity, titleShift]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (didAdvance.current) {
        return;
      }
      didAdvance.current = true;
      router.replace('/onboarding');
    }, 2600);
    return () => clearTimeout(timer);
  }, [router]);

  const goToOnboarding = () => {
    if (didAdvance.current) {
      return;
    }
    didAdvance.current = true;
    router.replace('/onboarding');
  };

  return (
    <Pressable style={styles.root} onPress={goToOnboarding}>
      <StatusBar style="dark" />
      <LinearGradient
        colors={[colors.background, colors.backgroundMid, colors.backgroundDeep]}
        locations={[0, 0.48, 1]}
        style={StyleSheet.absoluteFill}
      />
      <OrganicBackdrop />

      <View style={styles.center}>
        <Animated.View style={{ opacity: logoOpacity, transform: [{ scale: logoScale }] }}>
          <BrandMark size={96} />
        </Animated.View>

        <Animated.View
          style={[
            styles.copy,
            { opacity: titleOpacity, transform: [{ translateY: titleShift }] },
          ]}
        >
          <Text style={styles.brand}>Medbot</Text>
          <Text style={styles.kicker}>Your Health Companion</Text>
        </Animated.View>

        <Animated.Text style={[styles.tagline, { opacity: tagOpacity }]}>
          Trusted medical answers,{'\n'}right when you need them.
        </Animated.Text>
      </View>

      <Animated.View style={[styles.heartbeat, { opacity: lineOpacity }]}>
        <HeartbeatLine />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingBottom: 36,
  },
  copy: {
    alignItems: 'center',
    marginTop: 28,
  },
  brand: {
    ...type.brand,
    color: colors.ink,
  },
  kicker: {
    ...type.kicker,
    color: colors.ink,
    marginTop: 6,
  },
  tagline: {
    ...type.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 28,
  },
  heartbeat: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
