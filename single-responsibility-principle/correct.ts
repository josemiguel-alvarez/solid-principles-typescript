/** This a good example of the single responsibility principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/single-responsibility-principle-typescript
 */

class Student {
  id: number;
  name: string;
  course: Course;

  constructor(id: number, name: string, course: Course) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
}

class Course {
  id: number;
  name: string;
  subjects: string[];

  constructor(id: number, name: string, subjects: string[]) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  getCourseSubjects(): string {
    return this.subjects.join(", ");
  }
}
