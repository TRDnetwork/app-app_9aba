To run the tests, follow these steps:

1. Install the required dependencies: `npm install vitest jsdom`
2. Run the tests: `npm test`

The tests cover the following scenarios:

* `app.test.js`: Tests the rendering of the landing page and pricing section, as well as the navigation to pricing plan details.
* `api.test.js`: Tests the Supabase API calls, including querying pricing plans and handling API errors.

Note: Make sure to update the `supabaseClient` and `mockSupabase` implementations to match your actual Supabase setup.