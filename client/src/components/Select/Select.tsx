import * as React from 'react';
import classNames from 'classnames';
import styles from './Select.scss';

interface ISelectProps {
    className?: string;
    label: string;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<string>;
}

export const Select: React.FC<ISelectProps> = props => {
    const { className, label, name, options } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.persist();

        if (props.onChange) {
            props.onChange(event);
        }
    }

    return (
        <div
            className={classNames(
                styles.block,
                {[`${className}`] : className}
            )}
        >
            <label
                className={styles.label}
                htmlFor={name}
            >
                {label}
            </label>

            <select
                className={styles.select}
                name={name}
                onChange={handleChange}
            >
                <option>select</option>

                {options
                    .filter(option => !!option)
                    .map((option, index) => (
                        <option
                            key={index}
                            value={option}
                        >
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};
