import styles from "./Select.module.css"

type SelectProps = {
  value: string;

  placeholder: string;

  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;

  options: string[];
};

export function Select({ value, placeholder, onChange, options }: SelectProps) {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
