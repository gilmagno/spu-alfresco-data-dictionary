<import resource="/Company Home/Data Dictionary/Scripts/SPU/processo.js">

var processoId = (url.templateArgs['processoId']) ? url.templateArgs['processoId'] : null;
var assuntoId = (url.templateArgs['assuntoId']) ? url.templateArgs['assuntoId'] : null;
var manifestanteCpf = (url.templateArgs['manifestanteCpf']) ? url.templateArgs['manifestanteCpf'] : null;

model.processos = getCaixaAnaliseIncorporacao(processoId, assuntoId, manifestanteCpf);
