import express from 'express';
import { join } from "node:path";

const app = express();

app.get('/api/health', (request, response) => {
    response.json({ status: 'ok', system: 'TaskFlow' });
});

app.listen(3000, () => {
    console.log('TaskFlow API en http://localhost:3000');
});

export default app;