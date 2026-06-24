import type { ReactNode, ElementType } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealVariant = 'up' | 'scale' | 'left' | 'right';

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const variantAttr: Record<RevealVariant, string | undefined> = {
  up: undefined,
  scale: 'scale',
  left: 'left',
  right: 'right',
};

/**
 * Wraps children in a div that fades/slides/scales into view once it
 * scrolls into the viewport. `delay` (ms) staggers groups of siblings.
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      data-reveal={variantAttr[variant] ?? ''}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
