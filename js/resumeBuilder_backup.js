/*
var awesomeThoughts = "I'm Nadia and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
    //console.log(awesomeThoughts);
    //console.log(funThoughts);
//$("#main").append(funThoughts);

//var role = "Web Developer";


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


*/

//Your Challenge

//If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string 
//to ensure the first name has a capital first letter and the last name is totally capitalized? 
//Assume there's a space between the names. For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". 
//Your answer should be a single string saved to the variable called finalName.

//Take a look at MDN's documentation on string methods and click "Continue" when you're ready to give it a shot.

//var name = "AlbERt EINstEiN";
/*
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
*/
// Did your code work? The line below will tell you!
//console.log(nameChanger(name));
var skills = ["html", "css", "happiness", "fight against dark side"];

var bio = {
    "name" : "Nadia Borzunova",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "+7 926 150 2605",
        "email": "freeqs@gmail.com",
        "github": "Vlaakith",
        "twitter": "@free_network",
        "location": "Moscow",
        "blog": "nadin.tel"
    },
    //"picture" : "images/me.jpg",
    "picture": "http://placekitten.com/g/220/150",
    "welcome" : "Hello there!",
    "skills" : ["html", "css", "happiness", "fight against dark side"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedBlog);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills0);
$("#skills").append(formattedSkills1);
$("#skills").append(formattedSkills2);
$("#skills").append(formattedSkills3);

var work = {
    "employer": "MebelVia.ru",
    "title": "Head of marketing",
    "dates": "2013 - present time",
    "location": "Moscow",
    "desc": "Control over all marketing and advertising channel to the site."
};

var work_employer = HTMLworkEmployer.replace("%data%", work["employer"]);
var work_title = HTMLworkTitle.replace("%data%", work["title"]);
var work_dates = HTMLworkDates.replace("%data%", work["dates"]);
var work_location = HTMLworkLocation.replace("%data%", work["location"]);
//var work_desc = HTMLworkDescription.replace("%data%", work.desc);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(work_employer);
$(".work-entry").append(work_title);
$(".work-entry").append(work_dates);
$(".work-entry").append(work_location);
$(".work-entry").append(HTMLworkDescription.replace("%data%", work.desc));


var education = {
    "schools": [
        {
            "school": "MGUT",
            "degree": "Economist",
            "dates": "Long-long ego",
            "location": "Moscow",
            "major": "marketing, finance"
        },
        {
            "school": "School 45",
            "degree": "Graduated student",
            "dates": "Till 2000",
            "location": "Komsomolsk-on-Amure",
            "major": "Usual stuff"
        }
    ],
    "online": [
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://udacity.com"
        }
    ]
}

$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace("%data%", education.school));
$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.degree));
$(".education-entry").append(HTMLschoolDates.replace("%data%", education.dates));
$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.location));
$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.major));
