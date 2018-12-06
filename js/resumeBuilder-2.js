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
         "skills": ["HTML","CSS","Javascript","Ajax","React","Bootstrap"],
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

//new way place bio display into a function
bio.display = function() {
        
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
        
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
        
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
    
    // Contact info added to the top and bottom of index page
      $('#topContacts, #footerContacts').append(HTMLmobile.replace("%data%",  bio.contacts.mobile));
    
      $('#topContacts, #footerContacts').append(HTMLemail.replace("%data%",  bio.contacts.email));
    
      $('#topContacts, #footerContacts').append(HTMLgithub.replace("%data%",  bio.contacts.github));
    
//        for loops section for bio
    if(bio.skills.length > 0){
        
        $('#header').append(HTMLskillsStart);
    
            for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
             };
            };
          };
       
// calling the bio function
bio.display();
    
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
for (var job = 0; job < work.jobs.length; job++) {
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
var projects = {
     "projects": [
     {
         "title": "Drone Landing Page",
         "dates": "2015 - 2016",
         "description": "Simple landing Page",
         "images": ["https://via.placeholder.com/150x150"]
     },
     {
         "title": "Marceline fang shop",
         "dates": "2015 - 2016",
         "description": "Website for hand crafted Fang's",
         "images": ["https://via.placeholder.com/150x150"]
     },
    {
         "title": "project 3",
         "dates": "2015 - 2016",
         "description": "cool side project im working on",
         "images": ["https://via.placeholder.com/150x150"]
     },
   ]
};

//ammending the project info to the index.html
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var fomattedPojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(fomattedPojectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

projects.display();


        

//education section
var education = {
    "schools": [
     {
         "name": "CSU Fresno",
         "location":"Fresno, CA",
         "degree": "Fresno, CA",
         "majors": ["BFA Graphic Design"],
         "dates": "2011 - 2015",
         "url": "http://www.csufresno.edu/"
     }
        ],
    
    "onlineCourses": [
     {
         "title": "Front-End Web Development",
         "school": "Udacity",
         "date": "2018",
         "url": "http://udacity.com"
     }
        ],
};

//ammending the education info to the index.html
education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDegree = formattedSchoolName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolCity);
            var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
            $(".education-entry:last").append(formattedMajors);
        });
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);

            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedCourseOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseOnlineSchool;
            $(".education-entry:last").append(formattedCourseTitleSchool);

            var formattedCourseDates = HTMLonlineDates.replace("%data%", course.date);
            $(".education-entry:last").append(formattedCourseDates);

            var formattedCourseUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedCourseUrl);
        });

    }
}();
// google map of where i've worked

$("#mapDiv").append(googleMap);



    
    



        





    





















