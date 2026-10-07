import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

import { colors } from '@/theme';

type MedbotMascotProps = {
  pose?: 'wave' | 'tablet';
  size?: number;
};

export function MedbotMascot({ pose = 'wave', size = 196 }: MedbotMascotProps) {
  const height = size * 1.22;

  return (
    <Svg width={size} height={height} viewBox="0 0 200 244">
      <Ellipse cx="100" cy="228" rx="46" ry="8" fill={colors.blob} opacity={0.7} />

      <Path
        d="M62 38 C58 22 44 16 42 20"
        stroke={colors.primary}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="40" cy="16" r="8" fill={colors.primary} />
      <Path
        d="M138 38 C142 22 156 16 158 20"
        stroke={colors.primary}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="160" cy="16" r="8" fill={colors.primary} />

      <Rect x="28" y="78" width="18" height="38" rx="9" fill={colors.primary} />
      <Rect x="154" y="78" width="18" height="38" rx="9" fill={colors.primary} />

      <Ellipse cx="100" cy="78" rx="62" ry="54" fill={colors.robot} />
      <Ellipse cx="100" cy="78" rx="62" ry="54" fill="none" stroke={colors.robotEdge} strokeWidth="2" />

      <Rect x="54" y="64" width="92" height="40" rx="20" fill={colors.visor} />
      <Circle cx="80" cy="82" r="5.5" fill={colors.visorGlow} />
      <Circle cx="120" cy="82" r="5.5" fill={colors.visorGlow} />
      <Path
        d="M88 92 Q100 104 112 92"
        stroke={colors.visorGlow}
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
      />

      <Rect x="52" y="118" width="96" height="88" rx="38" fill={colors.robot} />
      <Rect x="52" y="118" width="96" height="88" rx="38" fill="none" stroke={colors.robotEdge} strokeWidth="2" />

      <Circle cx="100" cy="156" r="18" fill={colors.primary} />
      <Rect x="92" y="144" width="16" height="24" rx="5" fill={colors.white} />
      <Rect x="88" y="148" width="24" height="16" rx="5" fill={colors.white} />

      <Path
        d="M78 132 C62 138 54 156 64 168"
        stroke={colors.primary}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="64" cy="170" r="5" fill={colors.primary} />

      {pose === 'wave' ? (
        <G>
          <Path
            d="M148 138 C168 118 176 96 168 84"
            stroke={colors.robotEdge}
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          <Path
            d="M148 138 C168 118 176 96 168 84"
            stroke={colors.robot}
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <Circle cx="168" cy="80" r="15" fill={colors.primary} />
          <Path
            d="M52 150 C40 168 42 186 52 196"
            stroke={colors.robot}
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <Circle cx="50" cy="198" r="13" fill={colors.primary} />
        </G>
      ) : (
        <G>
          <Rect x="62" y="168" width="76" height="50" rx="10" fill={colors.visor} />
          <Rect x="70" y="176" width="60" height="34" rx="6" fill="#1B4A52" />
          <Circle cx="100" cy="193" r="8" fill={colors.primary} />
          <Rect x="97" y="186" width="6" height="14" rx="2" fill={colors.white} />
          <Rect x="93" y="190" width="14" height="6" rx="2" fill={colors.white} />
          <Circle cx="56" cy="196" r="13" fill={colors.primary} />
          <Circle cx="144" cy="196" r="13" fill={colors.primary} />
        </G>
      )}

      <Ellipse cx="78" cy="214" rx="16" ry="10" fill={colors.primary} />
      <Ellipse cx="122" cy="214" rx="16" ry="10" fill={colors.primary} />
    </Svg>
  );
}
