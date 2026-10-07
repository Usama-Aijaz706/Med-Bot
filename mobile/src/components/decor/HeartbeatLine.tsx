import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { colors } from '@/theme';

export function HeartbeatLine() {
  const { width } = useWindowDimensions();
  const height = 56;
  const mid = 28;
  const start = width * 0.04;
  const spike = width * 0.22;

  const d = [
    `M 0 ${mid}`,
    `L ${start} ${mid}`,
    `L ${spike} ${mid}`,
    `L ${spike + 10} ${mid}`,
    `L ${spike + 18} ${mid - 16}`,
    `L ${spike + 28} ${mid + 20}`,
    `L ${spike + 38} ${mid - 24}`,
    `L ${spike + 50} ${mid + 22}`,
    `L ${spike + 62} ${mid}`,
    `L ${spike + 78} ${mid}`,
    `L ${width} ${mid}`,
  ].join(' ');

  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="ecg" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={colors.heartbeat} stopOpacity="0.25" />
            <Stop offset="0.18" stopColor={colors.primarySoft} stopOpacity="1" />
            <Stop offset="0.55" stopColor={colors.heartbeat} stopOpacity="0.7" />
            <Stop offset="1" stopColor={colors.heartbeat} stopOpacity="0.12" />
          </LinearGradient>
        </Defs>
        <Path d={d} stroke="url(#ecg)" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 36,
    alignItems: 'center',
  },
});
