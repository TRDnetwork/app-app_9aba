```javascript
import { describe, it, expect } from 'vitest';
import { supabaseClient } from '../src/supabaseClient';
import { mockSupabase } from './mockSupabase';

describe('Supabase API calls', () => {
  it('queries pricing plans', async () => {
    mockSupabase({
      data: [
        { id: 1, name: 'Basic', price: 9.99 },
        { id: 2, name: 'Premium', price: 19.99 },
      ],
    });
    const { data, error } = await supabaseClient.from('pricing_plans').select('*');
    expect(data).toHaveLength(2);
    expect(error).toBeNull();
  });

  it('handles API errors', async () => {
    mockSupabase({
      error: 'Mocked API Error',
    });
    const { data, error } = await supabaseClient.from('pricing_plans').select('*');
    expect(data).toBeNull();
    expect(error).not.toBeNull();
  });
});
```