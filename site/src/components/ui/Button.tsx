import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkPrimary";
type ButtonSize = "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white shadow-soft hover:bg-brand-800 active:bg-brand-900",
  secondary:
    "border border-surface-border bg-white text-ink hover:border-brand-300 hover:text-brand-700",
  ghost: "text-brand-700 hover:text-brand-800 underline-offset-4 hover:underline",
  onDark:
    "border border-white/25 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-brand-900",
  onDarkPrimary:
    "bg-white text-brand-800 shadow-soft hover:bg-brand-50 focus-visible:ring-white focus-visible:ring-offset-brand-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (rest.href) {
    const anchorProps = rest as Omit<ButtonAsAnchor, keyof ButtonOwnProps>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof ButtonOwnProps>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
