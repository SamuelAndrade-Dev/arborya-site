import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode
  href?: string;
};

export function Button({
    children,
    href,
}: ButtonProps) {
    
    if (href) {
        return (
            <Link href={href}>
                {children}
            </Link>
        );
    }

    return (
        <button>
            {children}
        </button>
    )
}
