//Filter Long Words

//Hardcode an array of words. Have a variable maxLength, push words
//that are less than the maxLength into a new array, and console.log that.

var words = ['go', 'sitdown', 'dog', 'inside','happy', 'greenlawn', 'cat', 'goodie'];
var maxLength = 6;
var shortWords = [];

for(var i = 0; i < words.length; i++) {
	if (words[i].length < maxLength){
		shortWords.push(words[i]);
		}
	}
console.log(shortWords);