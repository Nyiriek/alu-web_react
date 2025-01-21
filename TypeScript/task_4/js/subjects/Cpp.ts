namespace Subjects {
    export class Cpp {
        private teacher!: Teacher;
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingC ?
                `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}` :
                'No available teacher';
        }
    }
}