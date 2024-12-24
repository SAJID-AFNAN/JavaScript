var shoping = {
    mobile: 4,
    watch: 5,
    pen: 3,
    umbralla: "sajid",
    shoes: 6
}
var keys = Object.keys(shoping);
var values = Object.values(shoping);

for (var i = 0; i < keys.length; i++) {
    var keyName = keys[i];
    var keyValue = shoping[keyName];
    console.log(keyValue);
    // console.log(keys[i] , values[i]);        //Alternative output print
}

// for in loop
for(var keyName in shoping){
    var value = shoping[keyName];
    console.log(keyName , value);
}

// Syntex of for in loop
// for( data_type name_of_represent_keys in Object_name){
//     printing_part;
// }
