```javascript
import express from 'express';
import { supabaseClient } from './supabaseClient';

const app = express();
app.use(express.json());

app.get('/api/pricing-plans', async (req, res) => {
  const { data, error } = await supabaseClient.from('pricing_plans').select('*');
  if (error) {
    res.status(500).json({ error: 'Failed to retrieve pricing plans' });
  } else {
    res.json(data);
  }
});

app.get('/api/pricing-plan/:id', async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabaseClient.from('pricing_plans').select('*').eq('id', id);
  if (error) {
    res.status(500).json({ error: 'Failed to retrieve pricing plan' });
  } else {
    res.json(data[0]);
  }
});
```