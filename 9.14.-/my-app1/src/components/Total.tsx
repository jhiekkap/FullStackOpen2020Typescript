import React from "react";
import { CourseParts } from '../types'

const Total: React.FC<CourseParts> = (props) => {
    return (
        <p>  Number of exercises{" "}{props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}</p>
    )
}

export default Total
