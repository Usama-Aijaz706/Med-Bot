import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radii } from '@/theme';

export function PhonePreview() {
  return (
    <View style={styles.phone}>
      <View style={styles.notch} />
      <View style={styles.screen}>
        <View style={styles.question}>
          <Text style={styles.questionText}>What are the symptoms of flu?</Text>
        </View>
        <View style={styles.answer}>
          <Text style={styles.answerTitle}>Common symptoms include:</Text>
          {['Fever', 'Cough', 'Sore throat', 'Runny nose'].map((item) => (
            <View key={item} style={styles.bulletRow}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phone: {
    width: 168,
    height: 236,
    backgroundColor: colors.white,
    borderRadius: 32,
    padding: 10,
    shadowColor: '#163847',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 22,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#E7F2EC',
  },
  notch: {
    alignSelf: 'center',
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D7E4DE',
    marginBottom: 8,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.phoneScreen,
    borderRadius: 22,
    padding: 10,
  },
  question: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 14,
    borderBottomRightRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: '94%',
    marginBottom: 10,
  },
  questionText: {
    fontFamily: fonts.semiBold,
    fontSize: 10,
    lineHeight: 14,
    color: colors.white,
  },
  answer: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 10,
    shadowColor: '#163847',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  answerTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 10,
    color: colors.navy,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 3,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.primary,
  },
  bulletText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors.textSecondary,
  },
});
