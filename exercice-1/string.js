console.log('ok')

var hw = "hello world";



console.log(ucFirst(hw));
console.log(capitalize(hw));
console.log(camelCase(hw));
console.log(snake_case(hw));
console.log(prop_access(new Object(), "test"));
console.log(leet(hw));
console.log(verlan(hw));
console.log(yoda(hw));
console.log(vig(hw, "key"));

function ucFirst(str) {
 if (str.length > 0) {
   return str[0].toUpperCase() + str.substring(1);
 } else {
   return str;
 }
}


function capitalize(str){
	var res = "";
	if (str.length > 0) {
		var strs = str.split(' ')
		for (var i = 0; i < strs.length ; i++) {
			res +=  strs[i][0].toUpperCase() + strs[i].substring(1) + " ";
		}
 	} else {
  	}
  	return res
}
function camelCase(str){
	var res = "";
	if (str.length > 0) {
		var strs = str.split(' ')
		for (var i = 0; i < strs.length ; i++) {
			res +=  strs[i][0].toUpperCase() + strs[i].substring(1);
		}
 	} else {
  	}
  	return res
}

function snake_case(str){
  	return str.toLowerCase().split(' ').join("_");
} 		
function prop_access(obj, prop){
	var o = obj;
	var obj_class = o.constructor.name;
	var prop = prop.split(' ');
	var tab = [];
	for (var i = 0; i < prop.length ; i++) {
		o = o[prop[i]];
		tab[i] = prop[i];
		if (typeof o === "undefined") {
			return obj_class + "." + tab.join('.');
		}
	}
	return o;
}

function leet(str) {
	var result = "";
	for (var i = 0; i < str.length; i++) {
			var char = str.charAt(i);
			if (char.toLowerCase() == "a"){
				char = "4";
			}
			if (char.toLowerCase() == "e"){
				char = "3";
			}
			if (char.toLowerCase() == "i"){
				char = "!";
			}
			if (char.toLowerCase() == "o"){
				char = "0";
			}
			if (char.toLowerCase() == "u"){
				char = "(_)";
			}
			if (char.toLowerCase() == "y"){
				char = "7";
			}
			result += char;
	}
	return result;
}

function verlan(string){
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

function yoda(string){
  return string.split(' ').reverse().join(" ");
}
function vig(input, clef)
{
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	input = input.toUpperCase();

	// Vérification de la clef:
	if (clef == null)
		clef = "";
	clef = clef.toUpperCase();
	var clef_long = clef.length;
	var clef_correcte = "";
	for (var i = 0; i < clef_long; i ++)
	{
		var clef_char = alphabet.indexOf (clef.charAt (i));
		if (clef_char>-1) {clef_correcte += alphabet.charAt (clef_char)};
	}
	clef = clef_correcte;
	clef_long = clef.length;
	if (clef_long == 0)
	{
		clef = "a";
		clef_long = 1;
	}

	// (Dé)cryptage:
	output = "";
	var clef_index = 0;
	var n=0;
	for (i=0; i< input.length; i ++)
	{
	   var input_char = input.charAt (i);
	   var input_char_value = alphabet.indexOf(input_char);
	   if (input_char_value>-1)  // ne (dé)chiffre que les 26 lettres majuscules
		{
		
			input_char_value += alphabet.indexOf(clef.charAt(clef_index));
			input_char_value += 26;
			input_char_value %= 26;
 	  		if ((n%5==0) && (n>0)) {output+=" "};
	 		n++;
			output += alphabet.charAt(input_char_value);
			clef_index = (clef_index+1) % clef_long;
		}
	}
	return output;
}