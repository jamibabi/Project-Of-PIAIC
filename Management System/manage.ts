class school {
    name: string;


    students: student[] = [];
    teachers: teacher[] = [];

    addStudent(stdObj: student) {
        this.students.push(stdObj)
    }
    addTeacher(techobj: teacher) {
        this.teachers.push(techobj)
    }

    constructor(name: string) {
        this.name = name;
    }
}

class student {
    name: string;
    age: number;
    schoolName: string

    constructor(name: string, age: number, schoolName: string) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }

}

class teacher extends student { }


let school1 = new school("jami`s")
let school2 = new school("bilal`s")


let s1 = new student("jami", 18, school2.name)
let s2 = new student("bilal", 19, school1.name)
let s3 = new student("jawad", 8, school2.name)

let t1 = new teacher("jarjis", 30, school1.name)
let t2 = new teacher("hunain", 24, school1.name)
let t3 = new teacher("rafay", 25, school2.name)

//add students
school1.addStudent(s2)
school2.addStudent(s1)
school2.addStudent(s3)

//add teachers
school1.addTeacher(t1)
school1.addTeacher(t2)
school2.addTeacher(t3)

//console.log(t1);
//console.log(t2);
//console.log(t3);

console.log(school1);
console.log(school2);


