import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import config from './config/index.js';
import productosRoutes from './routes/productos.routes.js';
import emailsRoutes from "./routes/emails.routes.js";
import "./mongodb.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

console.log(__direname);
console.log(__filename);

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send('Bienvenid@s a mi API');
});


app.get("/status", (req, res) => {
  res.send("OK");
});

app.use('/mypage', express.static(path.join(__direname, "public")));
app.use("/productos", productosRoutes);
app.use('/emails', emailsRoutes)



app.all('/*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

