import { type ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type Variant = 'light' | 'dark' | 'emerald' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface BackButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    label?: string;
    variant?: Variant;
    size?: Size;
    showLabel?: boolean;
    href?: string;
}

const variantStyles: Record<Variant, string> = {
    light: 'text-emerald-100 hover:text-white',
    dark: 'text-gray-600 hover:text-emerald-600',
    emerald: 'text-emerald-600 hover:text-emerald-800',
    white: 'text-white/80 hover:text-white'
};

const sizeStyles: Record<Size, { button: string; icon: string; text: string }> = {
    sm: { button: 'gap-1.5', icon: 'w-4 h-4', text: 'text-sm' },
    md: { button: 'gap-2', icon: 'w-5 h-5', text: 'text-base' },
    lg: { button: 'gap-2.5', icon: 'w-6 h-6', text: 'text-lg' }
};

const BackButton = ({
    label = 'Retour',
    variant = 'light',
    size = 'md',
    showLabel = true,
    href,
    className = '',
    ...props
}: BackButtonProps) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (href) {
            navigate(href);
        } else {
            navigate(-1);
        }
    };

    const baseClasses = 'inline-flex items-center font-medium transition-all duration-200 cursor-pointer group';
    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];

    const buttonClasses = `${baseClasses} ${sizeClass.button} ${variantClass} ${className}`;

    const iconElement = (
        <svg
            className={`${sizeClass.icon} transition-transform duration-200 group-hover:-translate-x-1`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
        </svg>
    );

    return (
        <button
            type="button"
            onClick={handleGoBack}
            className={buttonClasses}
            aria-label={showLabel ? undefined : label}
            {...props}
        >
            {iconElement}
            {showLabel && <span className={sizeClass.text}>{label}</span>}
        </button>
    );
};

export default BackButton;