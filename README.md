hasproperties
=============

This simple Javascript module provides functions to recursively check if a given object and subobjects contain a property and get that property.


### Node.js
Check if object and subobjects contain property
has(object, ...propertyNames)
hasFromList(object, propertyNameList)

Get property or return undefined if it doesn't exist
get(object, ...propertyNames)
getFromList(object, propertyNameList)

#### Example

var hasproperties = require('./hasproperties.js');
var testObject = { a: 1, b: { c: 2 } };

hasproperties.has(testObject, 'b', 'c'); //true
hasproperties.has(testObject, 'b', 'd'); //false
hasproperties.has(testObject, 'b', 'd', 'e'); //false


### Browser
Check if object and subobjects contain property
hasProperty(object, ...propertyNames)
hasPropertyFromList(object, propertyNameList)

Get property or return undefined if it doesn't exist
getProperty(object, ...propertyNames)
getPropertyFromList(object, propertyNameList)