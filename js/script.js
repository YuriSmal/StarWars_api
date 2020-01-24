var page = 1;
var content = document.getElementById("content");

function getPeople() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://swapi.co/api/people?page=" + page, true);
    request.responseType = "json";
    request.onload = function() {
        let status = request.status;
        if (status == 200) {
            for (var hero of request.response.results) {
                content.innerHTML += "<p>" + hero.name + "</p>" ;
            }
        }
    }
    request.send();
}

getPeople();

function getMorePeople() {
    ++page;
    getPeople();
}
