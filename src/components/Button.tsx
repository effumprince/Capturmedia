import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost' | 'on-dark';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  type?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  type?: never;
}

interface SubmitButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | SubmitButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink text-white border-ink hover:bg-shutter hover:border-shutter',
  ghost: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-white',
  'on-dark':
    'bg-transparent text-white border-white/15 hover:bg-shutter hover:border-shutter',
};

const base =
  'group inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.08em] uppercase px-7 py-4 border rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap hover:-translate-y-0.5';

const Arrow = () => (
  <span
    className="block w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
    aria-hidden="true"
  />
);

export default function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {children}
        <Arrow />
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={classes}>
        {children}
        <Arrow />
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      <Arrow />
    </button>
  );
}
