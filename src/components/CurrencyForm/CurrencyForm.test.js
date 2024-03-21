import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    //render component
    render(<CurrencyForm action={action} />);

    //find "convert" button
    const submitButton = screen.getByText('Convert');

    //find fields elems
    const amountField = screen.getByTestId('amount');
    const fromField = screen.getByTestId('from-select');
    const toField = screen.getByTestId('to-select');

    //set test values to fields
    userEvent.type(amountField, '100');
    userEvent.selectOptions(fromField, 'PLN');
    userEvent.selectOptions(toField, 'USD');

    //simulate user click on "convert" button
    userEvent.click(submitButton);

    //check if action callback was called once and with proper argument
    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({ amount: 100, from: 'PLN', to: 'USD' });
  });
});