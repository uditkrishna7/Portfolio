'use client';

import { useState } from 'react';

type AssetImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
};

export function AssetImage({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  fallbackLabel = 'Asset',
  objectFit = 'cover'
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);
  const isReady = Boolean(src && src.trim() && !hasError);

  if (!isReady) {
    return (
      <div
        className={`flex items-center justify-center border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center text-sm font-medium text-slate-400 ${fallbackClassName} ${className}`}
        aria-label={alt}
      >
        <span className="px-4">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src ?? ''}
      alt={alt}
      className={`block h-full w-full ${className}`}
      style={{ objectFit }}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
