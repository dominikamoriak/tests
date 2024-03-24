import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
        const testCases = [
            { amount: 100, expected: 'PLN 100.00 = $28.57' },
            { amount: 350, expected: 'PLN 350.00 = $100.00' },
            { amount: 50, expected: 'PLN 50.00 = $14.29' },
            { amount: 0, expected: 'PLN 0.00 = $0.00' },
        ];

        for(const testObj of testCases) {

         //render component
         render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);

         //find main div
         const output = screen.getByTestId('output');

         //check if the main div has the right content
         expect(output).toHaveTextContent(testObj.expected);

         //unmount component
         cleanup();
        }
    });
    it('should render proper info about conversion when USD -> PLN', () => {
        const testCases = [
            { amount: 100, expected: '$100.00 = PLN 350.00' },
            { amount: 350, expected: '$350.00 = PLN 1,225.00' },
            { amount: 50, expected: '$50.00 = PLN 175.00' },
            { amount: 0, expected: '$0.00 = PLN 0.00' },
        ];

        for(const testObj of testCases) {
            render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expected);
            cleanup();
        }
    });
    it('should render the same value when PLN -> PLN and USD -> USD', () => {
        const testCases = [
            { amount: 100, currency: 'PLN', expected: 'PLN 100.00 = PLN 100.00' },
            { amount: 222, currency: 'USD', expected: '$222.00 = $222.00' },
        ];
        for(const {currency, amount, expected} of testCases) {
            render(<ResultBox from={currency} to={currency} amount={amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(expected);
            cleanup();
        }
    });
});