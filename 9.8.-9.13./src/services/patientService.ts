import patientData from '../../data/patients.json'
import { Patient, NonSensitivePatientEntry } from '../types';


const patients: Array<Patient> = patientData as Array<Patient>;

const getEntries = (): Array<Patient> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addEntry
};