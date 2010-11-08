<import resource="/Company Home/Data Dictionary/Scripts/SPU/processo.js">

var props = new Array()

var numero = json.get("numero")+""

props["cm:title"] = numero

numero = numero.replace("/", "_");

props["cm:name"] = numero

var d = getDataFormatadaAlfresco(json.get("data"))
props["spu:processo.Data"] = d

props["spu:processo.Observacao"] = json.get("observacao")

var prioridadeId = json.get("prioridadeId")
var prioridadeNoderef = getNode(prioridadeId)
props["spu:processo.Prioridade"] = prioridadeNoderef // category. noderef

props["spu:processo.NumeroOrigem"] = json.get("numeroOrigem")

var dataPrazo = json.get("dataPrazo")
var dp = getDataFormatadaAlfresco(json.get("dataPrazo"))
props["spu:processo.DataPrazo"] = dp

props["spu:processo.ManifestanteNome"] = json.get("manifestanteNome")
props["spu:processo.ManifestanteCpf"] = json.get("manifestanteCpfCnpj")

var manifestanteTipoId = getNode(json.get("manifestanteTipoId"))
props["spu:processo.ManifestanteTipo"] = manifestanteTipoId // category. noderef

var manifestanteBairroNoderef = getNode(json.get("manifestanteBairroId"))
props["spu:processo.ManifestanteBairro"] = manifestanteBairroNoderef // category. noderef

var node = userhome.createNode(null, "spu:processo", props)

var idAssunto = json.get("assunto")
var nodeAssunto = getNode(idAssunto)
node.createAssociation(nodeAssunto, "spu:processo.Assunto")

var idProprietario = json.get("proprietarioId")
var nodeProprietario = getNode(idProprietario)
node.createAssociation(nodeProprietario, "spu:processo.Proprietario")

var nodeId = node.properties["sys:node-uuid"]

var nodeDestinoTramitacaoId = json.get("destino") // json.get("proprietarioId")

var corpo = json.get("corpo")

var nodeOrigemTramitacaoId = nodeProprietario.properties["sys:node-uuid"]

var retornoTramitacao = tramitar(nodeId, nodeOrigemTramitacaoId, nodeDestinoTramitacaoId, prioridadeId, dataPrazo, corpo)

model.processo = node
