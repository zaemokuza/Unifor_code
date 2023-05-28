function contagem (ind, final){
    if (ind>final){
        return [];
    }



    var indent =[];
    for (var i=ind; i <= final; i++) {
    indent.push(i);
    }

    return indent;

}

module.exports = contagem;