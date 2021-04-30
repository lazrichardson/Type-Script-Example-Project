import {Person} from "./Person";

export class Employee implements Person {

    firstName: string;
    lastName: string;
    // nickName: string;
    readonly personId: string;
    dogPhotoUrl: string;


    constructor(personId: string,
                firstName: string,
                lastName: string,
    ) {

        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dogPhotoUrl = "";
    }

    // clean print of the data associated with the object
    prettyPrint() {

        let data =
            "\nType: Employee" +
            "\nID: " + this.personId +
            "\nFirst Name: " + this.firstName +
            "\nLast Name: " + this.lastName +
            "\n\n";
        return data;
    }
    
    // fetches the url of a dog
    favoriteDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.dogPhotoUrl = data['message'])
    }

}