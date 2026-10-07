import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radii } from '@/theme';

type SpeechBubbleProps = {
  text: string;
};

export function SpeechBubble({ text }: SpeechBubbleProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.bubble}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.tail} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-start',
  },
  bubble: {
    backgroundColor: colors.white,
    borderRadius: radii.md,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: 130,
    shadowColor: '#163847',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  text: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    lineHeight: 16,
    color: colors.navy,
  },
  tail: {
    width: 10,
    height: 10,
    backgroundColor: colors.white,
    transform: [{ rotate: '45deg' }],
    marginTop: -6,
    marginLeft: 16,
  },
});
