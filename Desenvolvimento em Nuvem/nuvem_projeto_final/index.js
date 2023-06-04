const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://xcdkzxbjlhxevqqqkift.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZGt6eGJqbGh4ZXZxcXFraWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4MzA0NzIsImV4cCI6MjAwMTQwNjQ3Mn0.wsiJciG5p572A9h4I4FytAvQf2THtCklFayNOxgO04Y";

const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();

app.use(express.json());

// Listar todos os produtos
app.get("/produtos", async (req, res) => {
  try {
    const { data: produtos, error } = await supabase
      .from("produtos")
      .select("*");
    if (error) throw new Error(error);
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível listar os produtos" });
  }
});

// Obter um produto por ID
app.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data: produto, error } = await supabase
      .from("produtos")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error);
    if (!produto) throw new Error("Produto não encontrado");
    res.json(produto);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Criar um novo produto
app.post("/produtos", async (req, res) => {
  try {
    const { nome, preco } = req.body;
    const { data, error } = await supabase
      .from("produtos")
      .insert([{ nome, preco }]);
    if (error) throw new Error(error);
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível criar o produto" });
  }
});

// Atualizar um produto por ID
app.put("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const { data, error } = await supabase
      .from("produtos")
      .update({ nome, preco })
      .eq("id", id);
    if (error) throw new Error(error);
    if (data.length === 0) throw new Error("Produto não encontrado");
    res.json(data[0]);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Excluir um produto por ID
app.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("produtos")
      .delete()
      .eq("id", id);
    if (error) throw new Error(error);
    if (data.length === 0) throw new Error("Produto não encontrado");
    res.json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
