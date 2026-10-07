import { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { OrganicBackdrop } from '@/components/decor/OrganicBackdrop';
import { PaginationDots } from '@/components/onboarding/PaginationDots';
import { PillButton } from '@/components/ui/PillButton';
import { onboardingSlides } from '@/constants/onboarding';
import { colors, spacing, type } from '@/theme';

export function OnboardingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);
  const last = index === onboardingSlides.length - 1;
  const footerSpace = 76 + Math.max(insets.bottom, 16);
  const pageHeight = height - footerSpace;

  const goTo = (next: number) => {
    scrollRef.current?.scrollTo({ x: next * width, animated: true });
    setIndex(next);
  };

  const onNext = () => {
    if (last) {
      router.replace('/login');
      return;
    }
    goTo(index + 1);
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(next);
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <LinearGradient
        colors={[colors.background, colors.white, colors.backgroundMid]}
        locations={[0, 0.45, 1]}
        style={StyleSheet.absoluteFill}
      />
      <OrganicBackdrop variant="onboarding" />

      <Text style={[styles.step, { top: insets.top + 8 }]}>{onboardingSlides[index].step}</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        scrollEventThrottle={16}
        style={styles.pager}
      >
        {onboardingSlides.map((slide) => {
          const Illustration = slide.Illustration;
          return (
            <View key={slide.key} style={[styles.page, { width, height: pageHeight, paddingTop: insets.top + 28 }]}>
              <View style={styles.art}>
                <Illustration />
              </View>
              <View style={styles.copy}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.body}>{slide.body}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
        <PaginationDots count={onboardingSlides.length} index={index} />
        <PillButton
          label={last ? 'Get Started' : 'Next'}
          showArrow={!last}
          onPress={onNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  step: {
    position: 'absolute',
    right: spacing.screen,
    zIndex: 2,
    ...type.caption,
    color: colors.textMuted,
  },
  pager: {
    flex: 1,
  },
  page: {
    paddingHorizontal: spacing.screen,
    paddingBottom: 8,
  },
  art: {
    flex: 1,
    justifyContent: 'center',
  },
  copy: {
    minHeight: 150,
    paddingBottom: 4,
  },
  title: {
    ...type.title,
    color: colors.navy,
    marginBottom: 12,
  },
  body: {
    ...type.body,
    color: colors.textSecondary,
    maxWidth: 340,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screen,
    paddingTop: 8,
  },
});
