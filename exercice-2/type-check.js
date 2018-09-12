console.log("Exercice 1\n");
console.log("test1 : 1 - number : " + type_check_v1(1, "number"));
console.log("test2 : 1 - string : " + type_check_v1(1, "string"));
console.log("test3 : \"random string\" - string : " + type_check_v1("random string", "string"));
console.log("test4 : \"random string\" - boolean : " + type_check_v1("random string", "boolean"));
console.log("test5 : true - boolean : " + type_check_v1(true, "boolean"));


console.log("\n\nExercice 2\n");
var o = new Object();
o.value = 1;
o.type = "number";
o.enum = [1, 4, 8, 6];
console.log("Test 1 (True): " + type_check_v2(1, o));
o.value = 1;
o.type = "number";
o.enum = [6, 4, 8, 6];
console.log("Test 2 (False): " + type_check_v2(1, o));
o.value = 1;
o.type = "String";
o.enum = [1, 4, 8, 6];
console.log("Test 3 (False): " + type_check_v2(1, o));
o.value = 4;
o.type = "number";
o.enum = [1, 4, 8, 6];
console.log("Test 4 (False): " + type_check_v2(1, o));

console.log("\n\nExercice 3\n");
var verificator = {
    type: "object",
    properties: {
        prop1: {type: "number"},
        prop2: {type: "string"}
    }
};

o = {
    prop1: 1,
    prop2: 4
};
console.log("Test 1 : " + type_check(o, verificator));

function type_check_v1(object, type) {
    return typeof object === type;
}
function type_check_v2(object, type_object) {
    var ok = true;
    if (!type_check_v1(type_object.value, "undefined")) {
        if (object != type_object.value) {
            ok = false
        }
    }
    if (!type_check_v1(type_object.type, "undefined")) {
        if (!type_check_v1(object, type_object.type)) {
            ok = false
        }
    }
    if (!type_check_v1(type_object.enum, "undefined")) {
        if (type_object.enum.indexOf(object) == -1) {
            ok = false
        }
    }
    return ok;
}


function type_check(object, type) {
    var ok = true;
    ok = ok && type_check_v2(object, type);
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (!type_check_v1(type["properties"], "undefined"))
                ok = ok && type_check(object[property], type["properties"][property]);
        }
    }
    return ok;
}