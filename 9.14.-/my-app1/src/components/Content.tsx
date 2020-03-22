import React from "react";
import { CoursePartsProps } from '../types'
 
const Content: React.FC<CoursePartsProps> = (props) => {
    return (
        <div>
            {props.courseParts.map((part, i) => <p key={i}>{part.name} {part.exerciseCount}</p>)}
        </div>
    )
}

export default Content;