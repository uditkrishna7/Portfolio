import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2563EB',
          color: 'white',
          fontSize: 32,
          fontWeight: 700,
          borderRadius: 999
        }}
      >
        UK
      </div>
    ),
    {
      width: 64,
      height: 64
    }
  );
}
