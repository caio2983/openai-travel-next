import express from "express";
import bodyParser from "body-parser";
import { AzureOpenAI } from "openai/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

const endpoint = "https://caiol-mdb4c9y9-eastus2.cognitiveservices.azure.com/";
const modelName = "gpt-35-turbo";
const deployment = "gpt-35-turbo";
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = "2024-04-01-preview";

const client = new AzureOpenAI({
  endpoint,
  apiKey,
  deployment,
  apiVersion,
});

app.post("/trip-tasks", async (req, res) => {
  try {
    const { destination } = req.body;

    if (!destination) {
      return res
        .status(400)
        .json({ error: "Campo 'destination' é obrigatório" });
    }

    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente de viagens que cria listas de tarefas para qualquer destino. Sempre responda em JSON válido no formato: [{ 'title': string, 'description': string, 'image_query': string }]. Não inclua nada fora do JSON.",
        },
        {
          role: "user",
          content: `Crie uma lista de tarefas para uma viagem a ${destination}`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
      model: modelName,
    });

    let tasks;
    try {
      tasks = JSON.parse(response.choices[0].message.content);
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro ao interpretar JSON da resposta" });
    }

    res.json({ destination, tasks });
  } catch (err) {
    console.error("Erro no chat:", err);
    res.status(500).json({ error: "Erro ao processar requisição" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
