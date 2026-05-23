import styles from "./Title.module.css"

type SectionTitleProps = {
  subititle: string;
  title: string;
};

export function SectionTitle({ subititle, title }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <span className={styles.subititle}>{subititle}</span>
    </div>
  );
}
