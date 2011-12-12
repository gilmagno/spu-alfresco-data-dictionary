<import resource="/Company Home/Data Dictionary/Scripts/SPU/processo.js">

var processosParaArquivar = json.get("processos")
var despacho = json.get("despacho")
var statusArquivamento = json.get("statusArquivamento")
var motivo = json.get("motivo")
var local = json.get("local")
var pasta = json.get("pasta")

var arquivo = json.get("arquivo")
var estante = json.get("estante")
var prateleira = json.get("prateleira")
var caixa = json.get("caixa")

var localizacao = new Array()
localizacao['local'] = local
localizacao['arquivo'] = arquivo
localizacao['estante'] = estante
localizacao['prateleira'] = prateleira
localizacao['caixa'] = caixa
localizacao['pasta'] = pasta

//processos = arquivarProcessos(processosParaArquivar, despacho, statusArquivamento, motivo, local, pasta) // old
processos = arquivarProcessos(processosParaArquivar, despacho, statusArquivamento, motivo, localizacao)

model.processos = processos

