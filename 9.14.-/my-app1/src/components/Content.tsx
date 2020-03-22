import React from "react";
import { CourseParts } from '../types'
import Part from '../components/Part'

const Content: React.FC<CourseParts> = (props) => {

    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };

    return (
        <div>
            {props.courseParts.map((part, i) => {
                switch (part.name) {
                    case 'Fundamentals':
                        return <div key={i}>
                            <Part  name={part.name} exerciseCount={part.exerciseCount} description={part.description} />
                        </div>
                    case 'Using props to pass data':
                        return <div key={i}>
                            <Part name={part.name} exerciseCount={part.exerciseCount} groupProjectCount={part.groupProjectCount} />
                        </div>
                    case 'Deeper type usage':
                        return <div key={i}>
                            <Part name={part.name} exerciseCount={part.exerciseCount} description={part.description} exerciseSubmissionLink={part.exerciseSubmissionLink} />
                        </div>
                    default:
                        return assertNever(part);
                }
            })}
        </div>
    )
}

export default Content;

/* name: "Fundamentals",
exerciseCount: 10,
description: "This is an awesome course part"
},
{
name: "Using props to pass data",
exerciseCount: 7,
groupProjectCount: 3
},
{
name: "Deeper type usage",
exerciseCount: 14,
description: "Confusing description",
exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
} */