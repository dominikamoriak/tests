import styles from './Select.module.scss';

const Select = ({ children, onChange, ...rest }) => {
  return (
    <select onChange={onChange} className={styles.select} {...rest}>
      {children}
    </select>
  );
};

export default Select;