<import resource="/Company Home/Data Dictionary/Scripts/SPU/base.js">

var cxsEntrada = getCaixasEntrada()
var cxsAnalise = getCaixasAnalise()
var cxsArquivo = getCaixasArquivo()
var role = 'Consumer'
var group = 'SPU_TOTEM'

for (var i=1; i < cxsEntrada.length; i++) {
  cxsEntrada[i].setPermission(role, group)
}

for (var i=1; i < cxsAnalise.length; i++) {
  cxsAnalise[i].setPermission(role, group)
}

for (var i=1; i < cxsArquivo.length; i++) {
  cxsArquivo[i].setPermission(role, group)
}


model.resultado = 'Grupo SPU_TOTEM está com a role CONSUMER em todos os protocolos'
