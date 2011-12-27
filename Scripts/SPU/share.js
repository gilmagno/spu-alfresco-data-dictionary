var tipoDocumento;
var arquivos = new Array();

function vincularinformacoesarquivos(raiz){
    
    for(i=0; i < raiz.length(); i++){
       doc = raiz.get(i);   
       tipoDocumento = doc.get('tipo_documento')
       arquivos = doc.get('ids_arquivos');
       for(j=0; j < arquivos.legth(); j++ ){
           arquivo = arquivos.get(j);
           upFileNode = search.findNode(arquivo);
           upFileNode.properties['spu:tipo-documento'] = search.findNode(tipoDocumento);
           upFileNode.save();
       }  
    }
            
}
 
/* 
 
 {"raiz":[{'tipo_documento': '864a0d75-986f-4c84-a347-cab596d1cb59',
            'ids_arquivos': ['729014b6-dd0a-4202-81f2-4e729b209172', 'fafb1874-fb6b-43d8-979a-a3ba00bfc3f7']
         ]}   
  }     
*/