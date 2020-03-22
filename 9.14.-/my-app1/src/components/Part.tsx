import React from "react";
import { CoursePart } from '../types'

const Part: React.FC<CoursePart> = (props) => {  
    return <p>{props.name}{' '}{props.exerciseCount}{' '}{props.groupProjectCount && props.groupProjectCount}{' '}{props.description && props.description}{' '}{props.exerciseSubmissionLink && props.exerciseSubmissionLink}</p>
}

export default Part;

 