import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Important : définir le schéma par défaut
pool.on('connect', (client) => {
  client.query('SET search_path TO ocoffee, public');
});

export { pool };