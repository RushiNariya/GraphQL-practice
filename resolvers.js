import { nanoid } from 'nanoid';

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    (this.id = id),
      (this.courseName = courseName),
      (this.category = category),
      (this.price = price),
      (this.language = language),
      (this.email = email),
      (this.stack = stack),
      (this.teachingAssists = teachingAssists);
  }
}

const courseHolder = [];

const resolvers = {
  getCourse: ({ id }) => {
    // console.log(courseHolder);
    const courseId = courseHolder.find((course) => {
      return course.id === id;
    });
    return courseId;
  },
  getCourses: () => {
    return courseHolder;
  },
  createCourse: ({ input }) => {
    const { courseName, price, stack, teachingAssists } = input;
    let id = nanoid();
    let article = {
      id,
      courseName,
      price,
      stack,
      teachingAssists,
    };
    // courseHolder[id] = input;
    courseHolder.push(article);
    console.log(courseHolder);
    return article;
  },
};

export default resolvers;
