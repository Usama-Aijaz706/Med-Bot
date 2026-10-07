import { StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Ellipse, Path } from 'react-native-svg';

import { colors } from '@/theme';

type OrganicBackdropProps = {
  variant?: 'splash' | 'onboarding';
};

export function OrganicBackdrop({ variant = 'splash' }: OrganicBackdropProps) {
  const { width: w, height: h } = useWindowDimensions();

  if (variant === 'onboarding') {
    return (
      <Svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      >
        <Path
          d={`
            M ${-w * 0.1} ${-h * 0.04}
            C ${w * 0.18} ${-h * 0.08} ${w * 0.42} ${h * 0.04} ${w * 0.34} ${h * 0.16}
            C ${w * 0.24} ${h * 0.28} ${w * 0.02} ${h * 0.2} ${-w * 0.08} ${h * 0.12}
            C ${-w * 0.16} ${h * 0.06} ${-w * 0.16} ${0} ${-w * 0.1} ${-h * 0.04}
            Z
          `}
          fill={colors.blobFog}
        />
        <Ellipse cx={w * 0.9} cy={h * 0.08} rx={w * 0.18} ry={h * 0.08} fill={colors.blobWash} />
        <Path
          d={`
            M ${w * 0.55} ${h * 1.02}
            C ${w * 0.78} ${h * 0.92} ${w * 1.1} ${h * 0.96} ${w * 1.08} ${h * 1.08}
            C ${w * 1.05} ${h * 1.16} ${w * 0.7} ${h * 1.12} ${w * 0.55} ${h * 1.02}
            Z
          `}
          fill={colors.blob}
          opacity={0.45}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
    >
      <Path
        d={`
          M ${w * 0.52} ${-h * 0.06}
          C ${w * 0.72} ${-h * 0.1} ${w * 1.18} ${h * 0.02} ${w * 1.12} ${h * 0.2}
          C ${w * 1.06} ${h * 0.34} ${w * 0.86} ${h * 0.3} ${w * 0.74} ${h * 0.22}
          C ${w * 0.58} ${h * 0.12} ${w * 0.48} ${h * 0.06} ${w * 0.46} ${-h * 0.01}
          C ${w * 0.45} ${-h * 0.04} ${w * 0.46} ${-h * 0.05} ${w * 0.52} ${-h * 0.06}
          Z
        `}
        fill={colors.blob}
      />
      <Path
        d={`
          M ${w * 0.7} ${-h * 0.02}
          C ${w * 0.88} ${-h * 0.04} ${w * 1.08} ${h * 0.06} ${w * 1.02} ${h * 0.16}
          C ${w * 0.96} ${h * 0.24} ${w * 0.82} ${h * 0.2} ${w * 0.74} ${h * 0.12}
          C ${w * 0.66} ${h * 0.04} ${w * 0.64} ${0} ${w * 0.7} ${-h * 0.02}
          Z
        `}
        fill={colors.blobDeep}
        opacity={0.55}
      />
      <Ellipse
        cx={w * 0.58}
        cy={h * 0.1}
        rx={w * 0.08}
        ry={h * 0.035}
        fill={colors.blobFog}
      />
      <Ellipse
        cx={w * 0.92}
        cy={h * 0.18}
        rx={w * 0.07}
        ry={h * 0.03}
        fill={colors.blobWash}
      />

      <Path
        d={`
          M ${-w * 0.12} ${h * 0.72}
          C ${w * 0.12} ${h * 0.64} ${w * 0.32} ${h * 0.7} ${w * 0.4} ${h * 0.8}
          C ${w * 0.5} ${h * 0.92} ${w * 0.28} ${h * 1.08} ${-w * 0.04} ${h * 1.04}
          C ${-w * 0.18} ${h * 1.02} ${-w * 0.22} ${h * 0.82} ${-w * 0.12} ${h * 0.72}
          Z
        `}
        fill={colors.blobFog}
      />
      <Path
        d={`
          M ${-w * 0.08} ${h * 0.78}
          C ${w * 0.14} ${h * 0.72} ${w * 0.28} ${h * 0.8} ${w * 0.3} ${h * 0.9}
          C ${w * 0.32} ${h * 1.02} ${w * 0.08} ${h * 1.08} ${-w * 0.06} ${h * 1.02}
          C ${-w * 0.16} ${h * 0.98} ${-w * 0.16} ${h * 0.84} ${-w * 0.08} ${h * 0.78}
          Z
        `}
        fill={colors.blob}
        opacity={0.7}
      />
      <Ellipse
        cx={w * 0.16}
        cy={h * 0.86}
        rx={w * 0.12}
        ry={h * 0.04}
        fill={colors.blobWash}
      />
    </Svg>
  );
}
