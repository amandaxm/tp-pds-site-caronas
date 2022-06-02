import 'reflect-metadata';
import 'express-async-errors';
import '../shared/container';
import 'dotenv/config';
import cors from 'cors';

import express, { NextFunction, Request, Response } from 'express';

import { routes } from '../config/routes';
import * as database from '../database';
import { AppError } from '../error/AppError';

database.connect();

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());


app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.code).json({ message: error.message });
    }
  },
);

app.listen(8080);