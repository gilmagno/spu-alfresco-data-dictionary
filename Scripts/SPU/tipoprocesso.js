/**
 * Tipos de Processo
 * 
 * Métodos para gerenciar os Tipos de Processo do Sistema de Protocolo Único.
 * 
 * @package Sistema de Protocolo Único
 * @author Prefeitura Municipal de Fortaleza <http://www.fortaleza.ce.gov.br>
 * @since 29/09/2010
*/

var pastaRaizTiposProcesso = "Data Dictionary/Tipos de Processo/";

function getTiposProcesso() {
	var tiposProcesso = new Array()
	var pastaRaiz = companyhome.childByNamePath(pastaRaizTiposProcesso);

	if (pastaRaiz != undefined && pastaRaiz.isContainer) {
		tiposProcesso = pastaRaiz.getChildren();
	}

	return tiposProcesso;
}

function getTipoProcessoPorNome(nomeTipoProcesso) {
	var tipoProcesso = companyhome.childByNamePath(pastaRaizTiposProcesso + nomeTipoProcesso);
	if (tipoProcesso == undefined)	{
		status.code = 404;
		status.message = "Tipo de Processo nao encontrado.";
		status.redirect = true;
	}

	return tipoProcesso;
}

function getAssuntosPorTipoProcesso(nomeTipoProcesso) {
	tipoProcesso = getTipoProcessoPorNome(nomeTipoProcesso);
	var idTipoProcesso = tipoProcesso.getQnamePath();
	var assuntos = search.luceneSearch(
		"workspace://SpacesStore", 'PATH:"' + idTipoProcesso + '/*" AND TYPE:"spu:assunto"'
	);
	return assuntos;
}

function getTramitacoes() {
	var assuntos = search.luceneSearch('PATH:\"/cm:generalclassifiable//cm:SPU//cm:Tramitacao//*\"');
	return assuntos;
}

function getAbrangencias() {
	var abrangencias = search.luceneSearch('PATH:\"/cm:generalclassifiable//cm:SPU//cm:Abrangencia//*\"');
	return abrangencias;
}

function getTiposManifestante() {
	var tiposManifestante = search.luceneSearch('PATH:\"/cm:generalclassifiable//cm:SPU//cm:Tipo_x0020_de_x0020_Manifestante//*\"');
	return tiposManifestante;
}

function getOrCreateTipoProcesso(parent, nome, titulo) {
    var props = new Array()
    props['cm:name'] = nome
    props['cm:title'] = (titulo) ? titulo : nome
    props['spu:tipoprocesso.TipoManifestante'] = getDefaultTiposManifestante()

    return getOrCreateNode(parent, "spu:tipoprocesso", props)
}

function getOrCreateAssunto(tipoProcesso, nome, titulo) {
    var props = new Array()
    props['cm:name'] = nome
    props['cm:title'] = (titulo) ? titulo : nome
    
    return getOrCreateNode(tipoProcesso, "spu:assunto", props)
}