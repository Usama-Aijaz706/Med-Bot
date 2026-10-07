import { StyleSheet, View } from 'react-native';

import { ChatGlyph, HeartGlyph, HomeGlyph, ShieldGlyph } from '@/components/icons/Glyphs';
import { MedbotMascot } from '@/components/mascot/MedbotMascot';
import { FeatureChip } from '@/components/onboarding/FeatureChip';
import { colors } from '@/theme';

export function SupportSlide() {
  return (
    <View style={styles.stage}>
      <View style={styles.halo} />
      <View style={styles.mascot}>
        <MedbotMascot pose="tablet" size={176} />
      </View>
      <View style={styles.chips}>
        <FeatureChip icon={<ChatGlyph size={16} />} label="Ask anytime" offset={18} />
        <FeatureChip icon={<HeartGlyph size={16} />} label="Understand your symptoms" offset={0} />
        <FeatureChip icon={<HomeGlyph size={16} />} label="Get home care tips" offset={10} />
        <FeatureChip icon={<ShieldGlyph size={16} />} label="Stay healthier" offset={28} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    flex: 1,
    minHeight: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  halo: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: colors.blobFog,
    opacity: 0.9,
  },
  mascot: {
    marginLeft: -12,
  },
  chips: {
    flex: 1,
    gap: 10,
    paddingLeft: 4,
  },
});
