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
//console.log(new_array.length);


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
//console.log(incrementLastArrayElement(sampleArray));




//Your Challenge

//If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string 
//to ensure the first name has a capital first letter and the last name is totally capitalized? 
//Assume there's a space between the names. For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". 
//Your answer should be a single string saved to the variable called finalName.

//Take a look at MDN's documentation on string methods and click "Continue" when you're ready to give it a shot.

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var arrayOfNAme = finalName.split(' ');
    //Разбили строку по пробелу на массив с двумя элементами.
    finalName = arrayOfNAme[0][0].toUpperCase() + arrayOfNAme[0].slice(1).toLowerCase() + ' ' + arrayOfNAme[1].toUpperCase();
    //arrayOfNAme[0] - содержит имя. Нам нужно взять первую букву, превратить в большую.
    //Затем все оставшиеся буквы делаем маленькими - слайсом разрезаем строку на две, берем вторую часть, начиная со второго символа.
    //Добавляем пробел и затем капитализированную фамилию.
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));