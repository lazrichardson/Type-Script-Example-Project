import {Student} from "./src/Student";
import {Employee} from './src/Employee';

const EVENTS = {
    DOM_LOADED: "DOMContentLoaded",
    CLICK: "click"
};

const people = [];
let dogPhotoIndex = 0;


window.addEventListener(EVENTS.DOM_LOADED, () => {

    // add a person to the array
    document.getElementById("add").addEventListener(EVENTS.CLICK, () => {
        addPerson();
    });


    // show all persons entered
    document.getElementById("show-all").addEventListener(EVENTS.CLICK, () => {
        print();
    });

    // cycles through all people added and displays an image of the dog url associated with that person obkect
    document.getElementById("show-dog").addEventListener(EVENTS.CLICK, () => {
        document.getElementById("photo").src = people[dogPhotoIndex].dogPhotoUrl;

        if (people.length > 0 && dogPhotoIndex < people.length - 1) {
            dogPhotoIndex = dogPhotoIndex + 1;
        }

    });
});

function idGenerator() {
    return Math.floor(Math.random() * 1000000).toString(16);
}

function addPerson() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    if (document.getElementById("student").checked) {
        let student = new Student(idGenerator(), firstName, lastName);
        student.getFavoriteDogPhoto();
        people.push(student);
    } else {
        let employee = new Employee(idGenerator(), firstName, lastName);
        employee.favoriteDogPhoto();
        people.push(employee)
    }
}

function print() {
    let out = document.getElementById("people-output");
    out.innerText = "";
    out.innerText = "Here is everything entered so far:\n\n";

    for (let person of people) {
        out.innerText += person.prettyPrint()
    }
}



