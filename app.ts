import express from 'express';
export const app = express();
import {router} from './router';
import cors from 'cors';
app.use(cors())
app.use(express.json());
app.use(router)

