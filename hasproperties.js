function hasProperty(object) {
	var args = Array.prototype.slice.call(arguments,1,arguments.length);
	return hasPropertyFromList(object, args);
}

function hasPropertyFromList(object,properties) {
	if(properties.length === 0) { return true; }

    var nextProperty = properties.splice(0,1);
    if(!hasOwnProperty.call(object, nextProperty)) { return false; }

    return hasPropertyFromList(object[nextProperty], properties);
}

function getProperty(object) {
	var args = Array.prototype.slice.call(arguments,1,arguments.length);
	return getPropertyFromList(object, args);
}

function getPropertyFromList(object,properties) {
    var nextProperty = properties.splice(0,1);
    if(!hasOwnProperty.call(object, nextProperty)) { return undefined; }

    if(properties.length === 0) { return object[nextProperty]; }

    return getPropertyFromList(object[nextProperty], properties);
}

if(typeof exports != 'undefined'){
	exports.has = hasProperty;
	exports.get = getProperty;
	exports.getFromList = getPropertyFromList;
	exports.hasFromList = hasPropertyFromList;
}