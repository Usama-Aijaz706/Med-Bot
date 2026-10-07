import { StyleSheet, View } from 'react-native';

import { DatabaseGlyph, FileGlyph, SearchGlyph, ShieldGlyph } from '@/components/icons/Glyphs';
import { IconOrb } from '@/components/onboarding/IconOrb';
import { PhonePreview } from '@/components/onboarding/PhonePreview';
import { colors } from '@/theme';

export function VerifiedSlide() {
  return (
    <View style={styles.stage}>
      <View style={styles.halo} />
      <View style={styles.orbShield}>
        <IconOrb>
          <ShieldGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbSearch}>
        <IconOrb>
          <SearchGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbFile}>
        <IconOrb>
          <FileGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbDb}>
        <IconOrb>
          <DatabaseGlyph />
        </IconOrb>
      </View>
      <PhonePreview />
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    flex: 1,
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halo: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: colors.blobFog,
    opacity: 0.9,
  },
  orbShield: { position: 'absolute', top: 28, left: 36 },
  orbSearch: { position: 'absolute', top: 118, left: 10 },
  orbFile: { position: 'absolute', top: 48, right: 28 },
  orbDb: { position: 'absolute', bottom: 48, right: 22 },
});
