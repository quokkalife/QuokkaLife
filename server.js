const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos do site
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Simulação de pagamento (gateway depois)
app.post('/pagar', (req, res) => {
  res.json({ status: 'ok', mensagem: 'Pagamento processado pelo gateway' });
});

app.listen(PORT, () => {
  console.log(`Servidor QuokkaLife rodando na porta ${PORT}`);
});
