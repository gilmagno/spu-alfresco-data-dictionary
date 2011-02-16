<import resource="/Company Home/Data Dictionary/Scripts/SPU/processo.js">
if (json.get("destNodeUuid")) {
    var fileName = json.get("fileName");
    var fileContent = json.get("fileContent");
    var node = null;
    var nodeId = json.get("destNodeUuid");
} else {
    // no use
    var fileName = null;
    var fileContent = null;
    var node = null;
    var nodeId = null;

    for each (field in formdata.fields) {
        if (field.name == "file" && field.isFile) {
            fileName = field.filename
            fileContent = field.content
        } else if (field.name == "destNodeUuid") {
            nodeId = field.value
        }
    }
}

if (fileName == undefined || fileContent == undefined) {
    status.code = 400
    status.message = "Arquivo do upload não pode ser encontrado"
    status.redirect = true
} else {
    node = getNode(nodeId)
    uploadedFile = node.createFile(fileName)

    uploadedFile.content = fileContent

    /*uploadedFile.properties.content.write(fileContent);
    uploadedFile.properties.encoding = "UTF-8"
    uploadedFile.save()*/
}

model.fileName = fileName
model.fileContent = fileContent
model.nodeId = nodeId
