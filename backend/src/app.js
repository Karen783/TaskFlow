import express from 'express';
import { join } from "node:path";

const app = express();

// Datos de ejemplo en memoria
const tasks = [
    { id: 1, title: 'Diseñar el esquema de la API', status: 'DONE', project: 'TaskFlow API' },
    { id: 2, title: 'Crear la ruta de información', status: 'IN_PROGRESS', project: 'TaskFlow API' },
    { id: 3, title: 'Documentar los endpoints', status: 'TODO', project: 'TaskFlow Docs' }
];

app.get('/api/health', (request, response) => {
    response.json({ status: 'ok', system: 'TaskFlow' });
});

// TODO 7: información general del sistema
app.get('/api/info', (request, response) => {
    response.json({
        name: 'TaskFlow',
        version: '1.0.0',
        description: 'API para administrar tareas y proyectos de un equipo.'
    });
});

// TODO 8: lista de tareas de ejemplo
app.get('/api/tasks', (request, response) => {
    response.json(tasks);
});

// TODO 9: rutas inexistentes
app.use((request, response) => {
    response.status(404).json({
        status: 404,
        error: 'Ruta no encontrada',
        path: request.originalUrl
    });
});

app.listen(3000, () => {
    console.log('TaskFlow API en http://localhost:3000');
});

export default app;