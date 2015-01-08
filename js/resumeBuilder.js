var awesomeThoughts = "I'm Nadia and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
    //console.log(awesomeThoughts);
    //console.log(funThoughts);
//$("#main").append(funThoughts);

var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%","Nadia Borzunova");
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);

$("#main").append(s);

var new_array = [1,2,3,4,5,6,7];
console.log(new_array.length);


/////////////////////////////////
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    var popped = _array.pop();
    popped = popped + 1;
    newArray = _array.slice(0);
    newArray.push(popped);
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));