// Main function for this application.
function main() {
    var assignments = getAssignments();
    setMainLayout(assignments);
}

// Retrieves the assignments from the JSON file which for now is located at the bottom of this file.
function getAssignments() {
    var assignements = [];

    var jsonFile = getJsonFile();
    var len = jsonFile.length;

    for (i = 0; i < len; i++) {
        var assignment = new Assignment(jsonFile[i].id, jsonFile[i].company, jsonFile[i].logo, jsonFile[i].new,
            jsonFile[i].featured, jsonFile[i].position, jsonFile[i].role, jsonFile[i].level, jsonFile[i].postedAt,
            jsonFile[i].contract, jsonFile[i].location, jsonFile[i].languages, jsonFile[i].tools);

        assignements.push(assignment);
    }

    return assignements;
}

// Loops through the assignments and inserts the proper layout for each one.
function setMainLayout(assignments) {
    var layout = [];

    var assignmentsLength = assignments.length;
    for (i = 0; i < assignmentsLength; i++) {
        var assignment = assignments[i];

        layout.push(
            "<div class='well'>",
                "<div class='row'>",
                    "<div class='col-md-1'>",
                        "<img src=", assignment.logo, " />",
                    "</div>",
                    "<div class='col-md-11'>",
                        "<ul id='listOuter'>",
                            "<li>",
                                "<companyName>", assignment.company, "</companyName>",
                                isNew(assignment.isNew),
                                isFeatured(assignment.featured),
                            "</li>",
                            "<li>",
                                "<jobDescription>", assignment.position, "</jobDescription>");

                            layout.push(getFrameworks(assignment, false));
                            layout.push(getFrameworks(assignment, true));

                            layout.push(
                                "<frameworks onclick='temp()'>", assignment.level, "</frameworks>",
                                "<frameworks>", assignment.role, "</frameworks>",
                            "</li>",
                            "<li>",
                                "<infoFirst>", assignment.postedAt, " <span>&#8226;</span> </infoFirst>",
                                "<info>", assignment.contract, " <span>&#8226;</span> </info>",
                                "<info>", assignment.location, "</info>",
                            "</li>",
                        "</ul>",
                    "</div>",
                "</div>",
            "</div>",
        );
    }

    document.getElementById("mainLayout").innerHTML = layout.join("");
}

function temp() {
    alert("halsdkfjasd");
}

// Based on the boolean `isNew`, the "NEW!" tag is retrieved.
function isNew(isNew) {
    return (isNew) ? "<newTag>NEW!</newTag>" : "";
}

// Based on the boolean `isFeatured`, the "FEATURED" tag is retrieved.
function isFeatured(isFeatured) {
    return (isFeatured) ? "<featured>FEATURED</featured>" : "";
}

// Based on the value of the boolean `isLanguages`, the languages or the tools are iterated and retrieved.
function getFrameworks(assignment, isLanguages) {
    var frameworks = (isLanguages) ? assignment.languages : assignment.tools;
    var frameworksHtml = [];

    var len = frameworks.length;
    for (j = len - 1; j >= 0; j--) {
        frameworksHtml.push(
            "<frameworks>", frameworks[j], "</frameworks>"
        );
    }

    return frameworksHtml.join("");
}

// Class object used to proces the assignements.
class Assignment {
    constructor(id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools) {
        this.id = id;
        this.company = company;
        this.logo = logo;
        this.isNew = isNew;
        this.featured = featured;
        this.position = position;
        this.role = role;
        this.level = level;
        this.postedAt = postedAt;
        this.contract = contract;
        this.location = location;
        this.languages = languages;
        this.tools = tools;
    }
}

// The JSON file, pasted here because I couldn't get it working otherwise.
function getJsonFile() {
    return [
        {
            "id": 1,
            "company": "Photosnap",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 2,
            "company": "Manage",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
        },
        {
            "id": 3,
            "company": "Account",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        },
        {
            "id": 4,
            "company": "MyHome",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 5,
            "company": "Loop Studios",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "FullStack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["Ruby", "Sass"]
        },
        {
            "id": 6,
            "company": "FaceIt",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
        },
        {
            "id": 7,
            "company": "Shortly",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
        },
        {
            "id": 8,
            "company": "Insure",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
        },
        {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
        },
        {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        }
    ]
}
