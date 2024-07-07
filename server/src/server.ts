import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import connectToMongo from './utils/db'
import 'dotenv/config'
import transactionRouter from './routes/transactionRouter'
import statisticsRouter from './routes/statisticsRouter'



const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/transactions', transactionRouter);
app.use('/api/stats', statisticsRouter);

connectToMongo();

app.listen(process.env.PORT, () => {
   console.log(`Server listening on http://localhost:${PORT}`);
})

