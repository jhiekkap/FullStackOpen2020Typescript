import data from './patients.json';
import { PatientEntry } from '../src/types';
import toNewPatientEntry from "../src/utils";

const patientEntries: PatientEntry [] = data.map(obj => {
    const object = toNewPatientEntry(obj) as PatientEntry
    object.id = obj.id
    return object
  })
  
  export default patientEntries