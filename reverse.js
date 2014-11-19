var inputString = "bus";
var newString = "";

for( var i = inputString.length; i > 0; i--){
	newString += inputString.substr(i - 1,1);
}
console.log(newString);
