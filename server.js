const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Rota para servir arquivos estáticos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para obter dados
app.get('/api/data', async (req, res) => {
  try {
    const data = await fs.readJson('./data.json');
    res.json(data);
  } catch (error) {
    console.error('Erro ao ler data.json:', error);
    res.status(500).json({ error: 'Erro ao ler dados' });
  }
});

// Rota para salvar alistamento
app.post('/api/alistamentos', async (req, res) => {
  try {
    const data = await fs.readJson('./data.json');
    data.alistamentos.push(req.body);
    await fs.writeJson('./data.json', data, { spaces: 2 });
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar alistamento:', error);
    res.status(500).json({ error: 'Erro ao salvar alistamento' });
  }
});

// Rota para salvar aeronave
app.post('/api/aeronaves', async (req, res) => {
  try {
    const data = await fs.readJson('./data.json');
    data.aeronaves.push(req.body);
    await fs.writeJson('./data.json', data, { spaces: 2 });
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar aeronave:', error);
    res.status(500).json({ error: 'Erro ao salvar aeronave' });
  }
});

// Rota para deletar alistamento
app.delete('/api/alistamentos/:index', async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const data = await fs.readJson('./data.json');
    if (index >= 0 && index < data.alistamentos.length) {
      data.alistamentos.splice(index, 1);
      await fs.writeJson('./data.json', data, { spaces: 2 });
      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Índice inválido' });
    }
  } catch (error) {
    console.error('Erro ao deletar alistamento:', error);
    res.status(500).json({ error: 'Erro ao deletar alistamento' });
  }
});

// Rota para deletar aeronave
app.delete('/api/aeronaves/:index', async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const data = await fs.readJson('./data.json');
    if (index >= 0 && index < data.aeronaves.length) {
      data.aeronaves.splice(index, 1);
      await fs.writeJson('./data.json', data, { spaces: 2 });
      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Índice inválido' });
    }
  } catch (error) {
    console.error('Erro ao deletar aeronave:', error);
    res.status(500).json({ error: 'Erro ao deletar aeronave' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
