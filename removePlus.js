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
    var query = tagName + '[class*=' + removeClass + ']';
    var elems = document.querySelectorAll(query);
    var i;
    for(i = 0; i < elems.length; i++){
        var parent = elems[i];
        for(var j = 0; j < upLevels ; j++){
            parent = parent.parentNode;
        }
        parent.parentNode.removeChild(parent);	
    }
}
