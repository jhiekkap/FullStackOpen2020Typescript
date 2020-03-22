//import patientData from '../../data/patients.json'
import patientEntries from '../../data/patientEntries'
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';


const patients: Array<PatientEntry> = patientEntries as Array<PatientEntry>;

const getEntries = (): Array<PatientEntry> => {
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

const makeId = function () {
    const chars = 'ABCDE23456789';
    let result = '';
    for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const addPatient = (entry: NewPatientEntry): PatientEntry => {

    const newPatientEntry = {
        id: makeId(),
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
}

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient
};