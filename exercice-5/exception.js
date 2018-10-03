function UndefinedPropertyError(path, property, object) {

    var msg = "property '" + property + "' does not exist for path '" + path + "' , expected one of :" + getProperties(object).join(",");
    var e = new Error(msg);
    Object.setPrototypeOf(
        e, Object.getPrototypeOf(this)
    );
    if (Error.captureStackStrace) {
        Error.captureStackStrace(e, UndefinedPropertyError);
    }
    return e;
}

function getProperties(myObject) {
    res = [];
    for (var propertyName in myObject) {
        if (myObject.hasOwnProperty(propertyName) && typeof myObject[propertyName] !== "function") {
            res.push(propertyName);
        }
    }
    return res;
}
Object.prototype.prop_access = function (prop) {
    var o = this;
    var obj_class = o.constructor.name;
    var prop = prop.split(' ');
    var tab = [];
    for (var i = 0; i < prop.length; i++) {
        var old = o;
        o = o[prop[i]];
        tab[i] = prop[i];
        if (typeof o === "undefined") {

            throw new UndefinedPropertyError(tab.join('.'), prop[i], old);
        }
    }

    return o;
};

function test(){
    var res;
    try {
        res =  {test1: { test2: "ok2"}}.prop_access("test1 test");
    } catch (e) {
        console.log(e);
        return;
    }
    return JSON.stringify(res);
}
test();