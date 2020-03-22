/* export interface CoursePart {
    name: string;
    exerciseCount: number;
} */

export interface CourseParts {
    courseParts: Array<CoursePart>
}

export interface CourseName {
    courseName: string;
}

// new types
interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface NewCoursePartBase extends CoursePartBase{ 
    description?: string; 
    groupProjectCount?: number;
    exerciseSubmissionLink?: string;
  }

interface CoursePartOne extends NewCoursePartBase {
    name: "Fundamentals";  
}

interface CoursePartTwo extends NewCoursePartBase {
    name: "Using props to pass data"; 
}

interface CoursePartThree extends NewCoursePartBase {
    name: "Deeper type usage";  
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;