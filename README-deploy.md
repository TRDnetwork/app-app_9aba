# Prerequisites
* Node.js (>=14.17.0)
* npm (>=6.14.13)
* Supabase account

# Deploy with Vercel
1. Create a new Vercel project.
2. Link your GitHub repository to Vercel.
3. Configure your Vercel project settings:
	* Set the `Root Directory` to the root of your project.
	* Set the `Build Command` to `npm run build`.
	* Set the `Output Directory` to `build`.
4. Deploy your project to Vercel.

# Environment Variables
* `SUPABASE_URL`: Your Supabase instance URL.
* `SUPABASE_KEY`: Your Supabase API key.
* `SUPABASE_SECRET`: Your Supabase API secret.

# Migrations
* Run `npx supabase migrations apply` to apply any pending migrations.
```