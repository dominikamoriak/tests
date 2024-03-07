import { useState } from 'react';
import TextInput from './../TextInput/TextInput';
import Select from './../Select/Select';
import Button from './../Button/Button';
import styles from './CurrencyForm.module.scss';

const CurrencyForm = ({ action }) => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('PLN');
  const [to, setTo] = useState('PLN');

  const handleSubmit = e => {
    e.preventDefault();

    action({ 
      amount: parseInt(amount),
      from,
      to,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <span>Amount:</span>
        <TextInput type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <label>
        <span>From</span>
        <Select onChange={e => setFrom(e.target.value)}>
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </Select>
      </label>
      <label>
        <span>To</span>
        <Select onChange={e => setTo(e.target.value)}>
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </Select>
      </label>
      <Button>Convert</Button>
    </form>
  );
};

export default CurrencyForm;