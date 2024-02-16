import express from 'express';
import bodyParser from 'body-parser';
import { createPartner } from './controllers/partnerController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/create-partner', createPartner);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});