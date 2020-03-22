import React from "react";
import { CourseName } from '../types'

const Header: React.FC<CourseName> = (props) => {
    return <h1>{props.courseName}</h1>
}

export default Header