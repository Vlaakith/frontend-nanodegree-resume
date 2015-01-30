var bio = {
    "name" : "Malcolm Reynolds",
    "role" : "Captain",
    "contacts" : {
        "mobile": "+7 926 150 2605",
        "email": "freeqs@gmail.com",
        "github": "Vlaakith",
        "twitter": "@free_network",
        "location": "Moscow",
        "blog": "nadin.tel"
    },
    "picture" : "images/me.jpg",
    "welcomeMessage": "<p>\"Now I did a job. I got nothing but trouble since I did it, not to mention more than a few unkind words as regard to my character so let me make this abundantly clear. I <span>do the job</span>. And then I get <span>paid</span>.\"</p>",
    "skills" : ["leadership", "cargo shipping", "transportation", "protection"]
};

var work = {
    "jobs": [
        {
            "employer": "Independents army",
            "title": "Sergeant",
            "dates": "2505 - 2515",
            "location": "Moscow, Russia",
            "description": "Volunteered for the Independents army during the Unification War against the Alliance."
        },
        {
            "employer": "Self-employment",
            "title": "Captain of the Firefly-class transport ship Serenity",
            "dates": "2516 - still flying",
            "location": "Moscow, Russia",
            "description": "Cargo shipping and some other things."
        }
    ]
};

var projects = {
    "projects": [
        {
        "title": "Project1",
        "dates": "2010",
        "description": "Description for first project.",
        "images": [
            "images/proj11.jpg",
            "images/proj12.jpg",
            "images/proj13.jpg"
            ]
        },
        {
        "title": "Project2",
        "dates": "2011",
        "description": "Description for second project.",
        "images": [
            "images/proj21.jpg",
            "images/proj23.jpg",
            "images/proj22.jpg"
            ]
        }    
    ]
};

var education = {
    "schools": [
        {
            "name": "MGUT",
            "degree": "Economist",
            "dates": "Long-long ego",
            "location": "Moscow",
            "major": ["marketing", "finance"],
            "url": "ya.ru"
        },
        {
            "name": "School 45",
            "degree": "Graduated student",
            "dates": "Till 2000",
            "location": "Komsomolsk-on-Amure",
            "major": ["Usual stuff","And more usuall stuff"],
            "url": "google.com"
        }
    ],
    "onlineCourse": [
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://udacity.com"
        }
    ]
};




function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var work_employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var work_title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        
        $(".work-entry:last").append(work_employer + work_title);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

    //}
    };
}

displayWork();

/*
$(document).click(function(loc) {
  //$("#main").text("pageX: " + loc.pageX + ", pageY: " + loc.pageY);
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
*/
/*function locationazer (theWork) {
    var work_location = [];
        for (var job in theWork.jobs) {
            work_location.push(theWork.jobs[job].location);
            //document.write(theWork.jobs[job].title);
        }
    return work_location;
}*/

function locationazer (theWork) {
    var work_location = [];
    for (var i = 0; i < theWork.jobs.length; i++) {
        locationazer.push(theWork.jobs[i].location);
    }
    return work_location;
}

//locationazer(work);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

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
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

if (bio.skills.length != "") {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
};


function inName() {
    var internameArr = bio.name.split(" ");
    var name = internameArr[0][0].toUpperCase() + internameArr[0].slice(1).toLowerCase() + " " + internameArr[1].toUpperCase();
    return name;
}

//inName(bio.name);
$("#main").append([internationalizeButton]);

projects.display = function() {
    for (project in projects.projects) {       
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
        if (projects.projects[project].images.length > 0) {
            for (var i = 0; i < projects.projects[project].images.length; i++) {
                var img = HTMLprojectImage.replace("%data%",projects.projects[project].images[i]);
                $(".project-entry:last").append(img);
            };
        }
    }
}

projects.display(); 


education.display = function() {
    $("#education").prepend(HTMLeducationStart);
    for (school in education.schools) {       
        $(".text_as").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
    }
    for (onlineschool in education.onlineCourse) {       
        $(".text_as").append(HTMLonlineClasses);
        var formattedName = HTMLonlineTitle.replace("%data%",education.onlineCourse[onlineschool].title);
        $(".online-entry:last").append(formattedName);
        $(".online-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourse[onlineschool].school));
        $(".online-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourse[onlineschool].dates));
        $(".online-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourse[onlineschool].url));

    }
    $("#education").append(HTMLeducationEnd);
}

education.display(); 





$("#mapDiv").append(googleMap);

