



var treeObject = {
	height: null,
	character: null
};


function tree(treeObj){
	var print = treeObj.character;
console.log(treeObj);
for(i=0; i<treeObj.height-1;i++){
	print += treeObj.character;
}
console.log(print);
}

