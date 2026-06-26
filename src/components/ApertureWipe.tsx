import { useEffect, useState } from 'react';

/**
 * Full-screen overlay shown for a beat on first mount, with four red
 * "shutter blades" that swing open like a camera iris before the
 * overlay fades and unmounts. Mirrors the brand mark's play-button
 * silhouette as four rotated triangles.
 */
export default function ApertureWipe() {
  const [stage, setStage] = useState<'hold' | 'open' | 'gone'>('hold');

  useEffect(() => {
    const openTimer = setTimeout(() => setStage('open'), 10);
    const goneTimer = setTimeout(() => setStage('gone'), 1800);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (stage === 'gone') return null;

  const isOpen = stage === 'open';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-ink flex items-center justify-center pointer-events-none transition-opacity duration-500"
      style={{ opacity: isOpen ? 0 : 1, transitionDelay: isOpen ? '550ms' : '0ms' }}
    >
      <svg viewBox="0 0 140 140" className="w-32 h-32 sm:w-36 sm:h-36">
        <polygon
          className="aperture-blade"
          points="70,70 70,10 110,30"
          fill="#FF0002"
          style={{ transform: isOpen ? 'rotate(95deg) scale(2.4)' : 'none' }}
        />
        <polygon
          className="aperture-blade"
          points="70,70 130,70 110,110"
          fill="#FF0002"
          style={{ transform: isOpen ? 'rotate(-95deg) scale(2.4)' : 'none', transitionDelay: '50ms' }}
        />
        <polygon
          className="aperture-blade"
          points="70,70 70,130 30,110"
          fill="#FF0002"
          style={{ transform: isOpen ? 'rotate(95deg) scale(2.4)' : 'none', transitionDelay: '100ms' }}
        />
        <polygon
          className="aperture-blade"
          points="70,70 10,70 30,30"
          fill="#FF0002"
          style={{ transform: isOpen ? 'rotate(-95deg) scale(2.4)' : 'none', transitionDelay: '150ms' }}
        />
      </svg>
    </div>
  );
}
