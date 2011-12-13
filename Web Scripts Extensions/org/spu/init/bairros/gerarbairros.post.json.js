<import resource="/Company Home/Data Dictionary/Scripts/SPU/criarcategories.js">

var bairros = json.get("bairros");

model.mensagem = "Resultado: " + criarBairros(bairros);