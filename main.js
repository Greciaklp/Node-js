import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import config from './config/index.js';
import productosRoutes from './routes/productos.routes.js';
import "./mongodb.js";

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use("/productos", productosRoutes);

app.all('/*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
