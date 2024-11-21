# <div align="center">👕 Wear It - Frontend 👕</div>

## What is this?

This is an AI powered mobile app. It allows users upload a picture of themselves as well as an item of clothing. The app will then generate a picture of the user wearing the clothing item.
This is the frontend of the app.

## How does it work?

### Installing the app

1. Clone the repository

    ```bash
    git clone git@github.com:noah-haub/wear-it.git
    ```

2. Install dependencies

    ```bash
    yarn install
    ```

### Running supabase backend locally

1. Create a `.env` file from the `.env.example` file and fill it out accordingly.

2. Start supabase locally

    ```bash
    yarn supabase start
    ```

### Migrations
(to make this work, the `SUPABASE_DB_URL` secret needs to be filled out)

1. Make changes to the schema in `supabase/functions/common/db/schema.ts`

2. Generate a migration based on the schema changes

    ```bash
    yarn migrate:generate
    ```

3. Apply the migration (This will update the Supabase database)

    ```bash
    yarn migrate:up
    ```
