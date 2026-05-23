import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "reset" | "submit";
};

export function Button({ children, href, variant = "primary", type = "button", }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} type={type}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
