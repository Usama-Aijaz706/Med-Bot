import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';

import { colors } from '@/theme';

type GlyphProps = {
  size?: number;
  color?: string;
};

export function ChatGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H11l-4 3v-3H8.5A3.5 3.5 0 0 1 5 11.5v-5Z"
        fill={color}
        opacity={0.22}
      />
      <Path
        d="M8.5 4.2h7A2.3 2.3 0 0 1 17.8 6.5v5A2.3 2.3 0 0 1 15.5 13.8H10.6L7.2 16.2V13.8H8.5A2.3 2.3 0 0 0 10.8 11.5v-5A2.3 2.3 0 0 1 8.5 4.2Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CapsuleGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M8.2 15.8 L15.8 8.2 A4.2 4.2 0 0 1 21.7 14.1 L14.1 21.7 A4.2 4.2 0 0 1 8.2 15.8Z"
        fill={color}
      />
      <Path
        d="M8.2 15.8 L15.8 8.2 A4.2 4.2 0 1 0 9.9 2.3 L2.3 9.9 A4.2 4.2 0 0 0 8.2 15.8Z"
        fill={colors.blobDeep}
        stroke={color}
        strokeWidth="1.4"
      />
    </Svg>
  );
}

export function HeartGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 20s-7.2-4.4-9.2-9.1C1.4 7.6 3.4 5 6.4 5c1.8 0 3.3 1 4.1 2.4C11.3 6 12.8 5 14.6 5c3 0 5 2.6 3.6 5.9C19.2 15.6 12 20 12 20Z"
        fill={color}
      />
    </Svg>
  );
}

export function CrossGlyph({ size = 22, color = colors.white }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect width="24" height="24" rx="7" fill={colors.primary} />
      <Rect x="10" y="5.5" width="4" height="13" rx="1.6" fill={color} />
      <Rect x="5.5" y="10" width="13" height="4" rx="1.6" fill={color} />
    </Svg>
  );
}

export function FileGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M7 3.5h7.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5H7Z"
        fill={color}
        opacity={0.18}
      />
      <Path
        d="M8 4h6.2L18 7.8V19.2A1.2 1.2 0 0 1 16.8 20.4H8.2A1.2 1.2 0 0 1 7 19.2V5.2A1.2 1.2 0 0 1 8.2 4H8Z"
        stroke={color}
        strokeWidth="1.7"
        fill="none"
      />
      <Path d="M14.2 4v4.2H18" stroke={color} strokeWidth="1.7" fill="none" />
      <Path d="M9.4 12.2h6.2M9.4 15.4h4.6" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </Svg>
  );
}

export function ShieldGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 3.2 19 6.2v5.4c0 4.2-2.8 7.6-7 9.2-4.2-1.6-7-5-7-9.2V6.2L12 3.2Z"
        fill={color}
        opacity={0.18}
      />
      <Path
        d="M12 4.2 18 6.8v4.8c0 3.6-2.4 6.6-6 8.1-3.6-1.5-6-4.5-6-8.1V6.8L12 4.2Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SearchGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="11" cy="11" r="6.2" stroke={color} strokeWidth="1.9" fill="none" />
      <Path d="M15.8 15.8 20 20" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
    </Svg>
  );
}

export function DatabaseGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Ellipse cx="12" cy="7" rx="7" ry="3.2" stroke={color} strokeWidth="1.8" fill="none" />
      <Path d="M5 7v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V7" stroke={color} strokeWidth="1.8" fill="none" />
      <Path d="M5 12v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2v-5" stroke={color} strokeWidth="1.8" fill="none" />
    </Svg>
  );
}

export function HomeGlyph({ size = 22, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M4.5 11.2 12 5l7.5 6.2V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.2h-3.6V20.5H6A1.5 1.5 0 0 1 4.5 19v-7.8Z"
        fill={color}
      />
    </Svg>
  );
}
