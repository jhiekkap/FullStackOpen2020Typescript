import React from "react";
import { CourseNameProps } from '../types'

const Header: React.FC<CourseNameProps> = (props) => {
    return <h1>{props.courseName}</h1>
}

export default Header