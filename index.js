import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import QuotesRoute from './routes/QuotesRoute';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(QuotesRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
})