var temp,upLevels;
if (window.location.hostname.indexOf("aftonbladet") != -1){
    temp = "abPfxPremium";
    upLevels = 2;
} else {
    temp = "premium"
    upLevels = 1;
}
var count = 0;
removePlusFromTagName('*',temp);
//removePlusFromTagName('img');

function removePlusFromTagName (tagName,removeClass) {
    var elems = document.getElementsByTagName(tagName);
    var i;
    for(i in elems){
        var elem = elems[i];
        if(elem.getAttribute){
            var classValues = elem.getAttribute('class');
            if(classValues !== null){
                if(classValues.indexOf(removeClass) != -1){
                    var parent = elem;
                    for(var j = 0; j < upLevels ; j++){
                        parent = parent.parentNode;
                    }
                    parent.parentNode.removeChild(parent);	
                }
            }
        }
    }
}
