export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}


export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Student Class

export interface Studentconstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    workOnHomework: string;
    displayName: string;
}

export const StudentClass: Studentconstructor = class StudentClass implements StudentClassInterface {
    workOnHomework = 'Currently working';
    displayName = 'Student';
}