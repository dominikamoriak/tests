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
         render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />)

         //find main div
         const output = screen.getByTestId('output');

         //check if the main div has the right content
         expect(output).toHaveTextContent(testObj.expected);

         //unmount component
         cleanup();
        }
    });
});