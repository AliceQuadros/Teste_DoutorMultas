import express from 'express';
import { clientsRoutes } from './routes/clients.routes';

const app = express();

app.use(express.json());


app.use(clientsRoutes);


app.listen(3333, () => console.log("server is"));