import ResultBox from './ResultBox';
import { render } from '@testing-library/react';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
});