import React from 'react';
import { ImageResponse } from 'next/og';

const BACKGROUND = '#060b1a';
const FOREGROUND = '#f7f9ff';
const ACCENT = '#3a6cf4';

export function createIconResponse(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: BACKGROUND,
          color: FOREGROUND,
          fontWeight: 700,
          fontSize: size * 0.48,
          letterSpacing: -size * 0.05,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: size * 0.12,
            borderRadius: size * 0.28,
            border: `${Math.max(2, Math.round(size * 0.04))}px solid ${ACCENT}`,
            opacity: 0.85,
          }}
        />
        <span style={{ position: 'relative' }}>AW</span>
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
}
