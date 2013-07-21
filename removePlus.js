removePlusFromTagName('*');
//removePlusFromTagName('img');

function removePlusFromTagName (tagName) {
	var elems = document.getElementsByTagName(tagName);
	var i;
	for(i in elems){
		var elem = elems[i];
		if(elem.getAttribute)
		{
			var classValues = elem.getAttribute('class');
			if(classValues !== null){
				if(classValues.indexOf('premium') != -1){
					var parent = elem.parentNode;
					parent.parentNode.removeChild(parent);	
				}
			}
		}
	}
}
