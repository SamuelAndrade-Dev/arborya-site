import styles from "./TextArea.module.css"

type TextAreaProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextArea({ placeholder, value, onChange }: TextAreaProps) {
  return (
    <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={onChange} />
  );
}
