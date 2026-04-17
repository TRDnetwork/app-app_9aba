```javascript
import { describe, it, expect } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/jsdom';
import App from '../src/App';

describe('App', () => {
  it('renders landing page', () => {
    const { getByText } = render(<App />);
    expect(getByText('Fitness App')).toBeInTheDocument();
  });

  it('renders pricing section', () => {
    const { getByText } = render(<App />);
    expect(getByText('Pricing')).toBeInTheDocument();
  });

  it('displays pricing plans', () => {
    const { getAllByRole } = render(<App />);
    const plans = getAllByRole('button');
    expect(plans).toHaveLength(3);
  });

  it('navigates to pricing plan details', () => {
    const { getByText, getAllByRole } = render(<App />);
    const plans = getAllByRole('button');
    fireEvent.click(plans[0]);
    expect(getByText('Plan Details')).toBeInTheDocument();
  });

  it('mocks Supabase API calls', () => {
    const { getByText } = render(<App />);
    expect(getByText('Mocked API Call')).toBeInTheDocument();
  });
});
```