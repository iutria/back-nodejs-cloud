import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import setupSwagger from './swagger/swagger';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/temp', express.static('temp'))

const port = 80;

app.listen(
    port,
    ()=>{
        setupSwagger(app)
        console.log(`http://localhost:${port}/api/swagger`)
    }
)