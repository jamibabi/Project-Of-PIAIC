import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "select the name",
            name: "select",
            choices: ["self", "student", "exit"],
        });
        if (ans.select === "self") {
            console.log("what is my name");
            console.log("I am fine");
        }
        else if (ans.select === "student") {
            const ans2 = await inquirer.prompt({
                type: "input",
                message: "who's talking about? ",
                name: "student",
            });
            // Find the student object with the entered name
            const student = persons.students.find((val) => val.name === ans2.student);
            // Check if a student with the provided name was found
            if (student) {
                console.log(`Hello, I am ${student.name} and I am fine`);
                console.log(persons.students);
            }
            else {
                // If no student was found, create a new one and add it to the persons' list
                const newStudent = new Student(ans2.student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name} and I am fine`);
                console.log(persons.students);
            }
        }
        else if (ans.select === "exit") {
            break;
        }
    } while (true);
};
programStart(persons);
