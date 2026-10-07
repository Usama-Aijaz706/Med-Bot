import { StyleSheet, View } from 'react-native';

import {
  CapsuleGlyph,
  ChatGlyph,
  CrossGlyph,
  FileGlyph,
  HeartGlyph,
} from '@/components/icons/Glyphs';
import { MedbotMascot } from '@/components/mascot/MedbotMascot';
import { IconOrb } from '@/components/onboarding/IconOrb';
import { SpeechBubble } from '@/components/onboarding/SpeechBubble';
import { colors } from '@/theme';

export function AssistantSlide() {
  return (
    <View style={styles.stage}>
      <View style={styles.halo} />
      <View style={styles.orbChat}>
        <IconOrb>
          <ChatGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbCapsule}>
        <IconOrb>
          <CapsuleGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbHeart}>
        <IconOrb>
          <HeartGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbCross}>
        <IconOrb>
          <CrossGlyph />
        </IconOrb>
      </View>
      <View style={styles.orbFile}>
        <IconOrb>
          <FileGlyph />
        </IconOrb>
      </View>
      <View style={styles.bubble}>
        <SpeechBubble text="Ask me anything!" />
      </View>
      <MedbotMascot pose="wave" size={188} />
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
  orbChat: { position: 'absolute', top: 28, left: 28 },
  orbCapsule: { position: 'absolute', top: 108, left: 8 },
  orbHeart: { position: 'absolute', bottom: 58, left: 36 },
  orbCross: { position: 'absolute', bottom: 36, alignSelf: 'center', marginLeft: -18 },
  orbFile: { position: 'absolute', top: 118, right: 18 },
  bubble: { position: 'absolute', top: 22, right: 8, zIndex: 2 },
});
