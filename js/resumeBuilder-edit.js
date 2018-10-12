// adding the cool location click t
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});

// adding the four objects " work, project, education, and bio"
var bio = {
         "name": "Kelley Sylvester",
         "role": "Web Developer",
         "skills": ["Writing Dope Songs","Making Sick Beats","Vampire by night","Guitar Hero","Hippie"],
         "welcomeMessage": "Hi, How's life?",
         "biopic": "images/anthy.jpg",
         "contacts": { 
         "mobile": "916-969-2996",
         "email": "sylvesterkelley@gmail.com",
         "github": "kpsylvester",
         "location": "Sacramento, CA" 
         }
     }

//this is the code used to replace %data% with variable name
//and then its appending the formattedName ect to the #header so that it
//shows in the index.html
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


//jQuery used to append the formatted ones to the index in the header
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    for (skill in bio.skills) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}
    
//work section

var work = {
 "jobs": [
     {
         "employer": "AVB Marketing",
         "title": "Digital Designer",
         "dates": "2016 - 2018",
         "location": "Sacramento, CA",
         "description": "I was apart of a team of designers creating facebook and google ads for local and international brands. These brands include whirlpool and samsung to name a few."
     },
      {
         "employer": "Montico",
         "title": "Tech Lead",
         "dates": "2015 - 2016",
         "location": "Fresno, CA",
         "description": "My purpose was to build their main Drone aerial surveying website as well as sister company sites. I even made promo videos which lead to a contract with At&t."  
     },
      {
         "employer": "YourWebPros",
         "title": "Web/graphic design intern",
         "dates": "Summer 2015",
         "location": "Fresno, CA",
        "description": "I helped them build website mockups using photoshop and even helped them make a website using wordpress."
     },
     {
         "employer": "Commerce Printing",
         "title": "Graphic Design Intern",
         "dates": "Summer 2015",
         "location": "Sacramento, CA",
         "description": "My responsibility with the team was to create digital brochures and also did a bunch of typesetting for the magazines they did for local theater companies, hospitals, and the Sacramento Kings."
     },     
 ]
};

// work experience purshed to the index using a function instead of for loops
function displayWork(){
for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
//    the .append is used to push the formatted stuff to the work-entry:last section
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDate);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);    
}
}

displayWork();

// project section
var project = {
     "projects": [
     {
         "title": "Montico",
         "dates": 2015 - 2016,
         "description": "blah blah blah",
         "images": ["https://codepen.io/kelleyparish/"]
     },
      {
         "title": "Montico",
         "dates": 2015 - 2016,
         "description": "blah blah blah",
         "images": ["https://codepen.io/kelleyparish/"]
     },
      {
         "title": "Montico",
         "dates": 2015 - 2016,
         "description": "blah blah blah",
         "images": ["https://codepen.io/kelleyparish/"]
     },
 ]
};

//education section
var education = {
    "schools": [
     {
         "name": "CSU Fresno",
         "location": "Fresno, CA",
         "degreeDates": 2011 - 2015,
         "major": "BFA Graphic Design",
         "url": "http://csufresno.",
     }
        ],
    
    "onlineCourses": [
     {
         "title": "Front-End Web Development",
         "school": "Udacity",
         "dates": "2018",
         "url": "http://udacity.com",
     }
        ]
};
        





    





















