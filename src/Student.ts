import {Person} from './Person';

export class Student implements Person {
    personId: string;
    firstName: string;
    lastName: string;
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

    prettyPrint() {

        let data =
            "\nType: Person" +
            "\nID: " + this.personId +
            "\nFirst Name: " + this.firstName +
            "\nLast Name: " + this.lastName +
            "\n\n";
        return data;
    }

    getFavoriteDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.dogPhotoUrl = data['message'])
    }
}