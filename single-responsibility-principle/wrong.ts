/** This a wrong example of the single responsibility principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/single-responsibility-principle-typescript
 */

class Student {
  id: number;
  name: string;
  courseId: number;
  courseName: string;
  courseSubjects: string[];

  constructor(
    id: number,
    name: string,
    courseId: number,
    courseName: string,
    courseSubject: string[]
  ) {
    this.id = id;
    this.name = name;
    this.courseId = courseId;
    this.courseName = courseName;
    this.courseSubjects = courseSubject;
  }

  getCourseSubjects(): string {
    return this.courseSubjects.join(", ");
  }
}
