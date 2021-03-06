import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors()); // security
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server ON http://192.168.0.176:3333')
})

// METODOS HTTP
// GET = Buscar informações do backedn
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação