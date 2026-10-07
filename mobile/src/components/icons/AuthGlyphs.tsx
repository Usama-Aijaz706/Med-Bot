import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme';

type GlyphProps = {
  size?: number;
  color?: string;
};

export function UserGlyph({ size = 20, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 12.2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z"
        fill={color}
        opacity={0.14}
        stroke={color}
        strokeWidth="1.7"
      />
      <Path
        d="M5.2 20.2c.6-3.4 3.4-5.4 6.8-5.4s6.2 2 6.8 5.4"
        stroke={color}
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function MailGlyph({ size = 20, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M4.2 6.4h15.6A1.8 1.8 0 0 1 21.6 8.2v9.6a1.8 1.8 0 0 1-1.8 1.8H4.2A1.8 1.8 0 0 1 2.4 17.8V8.2A1.8 1.8 0 0 1 4.2 6.4Z"
        fill={color}
        opacity={0.12}
      />
      <Path
        d="M4.4 7h15.2A1.4 1.4 0 0 1 21 8.4v9.2A1.4 1.4 0 0 1 19.6 19H4.4A1.4 1.4 0 0 1 3 17.6V8.4A1.4 1.4 0 0 1 4.4 7Z"
        stroke={color}
        strokeWidth="1.7"
        fill="none"
      />
      <Path d="M4 8.2 12 13.4 20 8.2" stroke={color} strokeWidth="1.7" fill="none" strokeLinejoin="round" />
    </Svg>
  );
}

export function LockGlyph({ size = 20, color = colors.primary }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M7.4 10.2V8.4a4.6 4.6 0 0 1 9.2 0v1.8"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d="M6.2 10.2h11.6A1.8 1.8 0 0 1 19.6 12v7.2A1.8 1.8 0 0 1 17.8 21H6.2A1.8 1.8 0 0 1 4.4 19.2V12A1.8 1.8 0 0 1 6.2 10.2Z"
        fill={color}
        opacity={0.12}
        stroke={color}
        strokeWidth="1.7"
      />
      <Path d="M12 14.2v3.2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function EyeGlyph({ size = 20, color = colors.textMuted }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M2.8 12s3.4-6.2 9.2-6.2S21.2 12 21.2 12s-3.4 6.2-9.2 6.2S2.8 12 2.8 12Z"
        stroke={color}
        strokeWidth="1.7"
        fill="none"
      />
      <Path d="M12 15.1a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" stroke={color} strokeWidth="1.7" fill="none" />
    </Svg>
  );
}

export function EyeOffGlyph({ size = 20, color = colors.textMuted }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3 4.2 20.4 20" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <Path
        d="M9.2 7.4C10.1 7 11 6.8 12 6.8c5.8 0 9.2 6.2 9.2 6.2a16 16 0 0 1-3.4 3.8M6.2 9.4A16 16 0 0 0 2.8 13S6.2 19.2 12 19.2c1.2 0 2.3-.3 3.3-.8"
        stroke={color}
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CheckGlyph({ size = 12, color = colors.white }: GlyphProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12">
      <Path d="M2.2 6.2 4.7 8.8 9.8 3.4" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function GoogleMark({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M21.6 12.23c0-.74-.06-1.45-.18-2.13H12v4.03h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z"
        fill="#4285F4"
      />
      <Path
        d="M12 22c2.7 0 4.96-.9 6.62-2.35l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.58A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <Path
        d="M6.41 13.99A6.01 6.01 0 0 1 6.1 12c0-.69.12-1.36.31-1.99V7.43H3.06A10 10 0 0 0 2 12c0 1.61.39 3.14 1.06 4.57l3.35-2.58Z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.88c1.47 0 2.78.5 3.82 1.5l2.86-2.86C16.95 2.9 14.7 2 12 2A10 10 0 0 0 3.06 7.43l3.35 2.58C7.2 7.64 9.4 5.88 12 5.88Z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export function AppleMark({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M16.7 12.3c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.2c1.1-1.2 1.5-2.4 1.5-2.5-.1 0-2.8-1.1-2.8-4.7ZM14.8 5.6c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.2 1.9-1 3 1 .1 2-.5 2.7-1.4Z"
        fill={colors.navy}
      />
    </Svg>
  );
}
