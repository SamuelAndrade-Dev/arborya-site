import Link from "next/link";
import styles from "./Button.module.css"

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
        <button className={styles.button}>
            {children}
        </button>
    )
}
