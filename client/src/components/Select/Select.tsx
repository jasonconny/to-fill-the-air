import React from 'react';
import classNames from 'classnames';
import styles from './Select.scss';

interface SelectProps {
  className?: string;
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  selectedOption?: string;
}

export const Select: React.FC<SelectProps> = ({
  className,
  label,
  name,
  onChange,
  options,
  selectedOption,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.persist();

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={classNames(styles.block, { [`${className}`]: className })}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <select
        className={styles.select}
        name={name}
        onChange={handleChange}
        value={selectedOption}
      >
        <option value={''}>select</option>

        {options
          .filter((option) => !!option)
          .map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};
