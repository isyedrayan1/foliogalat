import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#030303',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', top: '-1px' }}>
          <span>g</span>
          <span style={{ color: '#7c83ff', marginLeft: '1px', fontWeight: 'bold' }}>=</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
