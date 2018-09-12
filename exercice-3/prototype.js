String.prototype.ucfirst = function (){
    var res;
    if (this.length > 0) {
        res = this[0].toUpperCase() + this.substring(1);
    } else {
        res = this;
    }
    return res;
};
String.prototype.capitalize = function (){
    var res = "";
    if (this.length > 0) {
        var strs = this.split(' ');
        for (var i = 0; i < strs.length ; i++) {
            res +=  strs[i][0].toUpperCase() + strs[i].substring(1) + " ";
        }
    }
    return res
};
String.prototype.camelCase = function (){
    var res = "";
    if (this.length > 0) {
        var strs = this.split(' ');
        for (var i = 0; i < strs.length ; i++) {
            res +=  strs[i][0].toUpperCase() + strs[i].substring(1);
        }
    } else {
    }
    return res
};
String.prototype.snake_case = function(){
    return this.toLowerCase().split(' ').join("_");
};
Object.prototype.prop_access = function(prop){
    var o = this;
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
};
String.prototype.leet = function(){
    var result = "";
    for (var i = 0; i < this.length; i++) {
        var char = this.charAt(i);
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
};
String.prototype.verlan = function(){
    return this.split("").reverse().join("").split(" ").reverse().join(" ");
};
String.prototype.yoda = function(){
    return this.split(' ').reverse().join(" ");
};
String.prototype.vig = function(clef){
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    input = this.toUpperCase();

    // Vérification de la clef:
    if (clef == null)
        clef = "";
    clef = clef.toUpperCase();
    var clef_long = clef.length;
    var clef_correcte = "";
    for (var i = 0; i < clef_long; i ++)
    {
        var clef_char = alphabet.indexOf (clef.charAt (i));
        if (clef_char > -1) {
            clef_correcte += alphabet.charAt(clef_char)
        }
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
            if ((n % 5 == 0) && (n > 0)) {
                output += " "
            }
            n++;
            output += alphabet.charAt(input_char_value);
            clef_index = (clef_index+1) % clef_long;
        }
    }
    return output;
};
console.log("hello world".ucfirst());
console.log("hello world".capitalize());
console.log({test1:"ok1",test1:"ok2"}.prop_access("test1 test2"));
console.log("hello world".camelCase());
console.log("hello world".snake_case());
console.log("hello world".leet());
console.log("hello world".verlan());
console.log("hello world".yoda());
console.log("hello world".vig());