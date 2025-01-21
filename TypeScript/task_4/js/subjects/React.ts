namespace Subjects {
    export class React {
        private teacher!: Teacher;
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingReact ?
                `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}` :
                'No available teacher';
        }
    }
}