//import patientData from '../../data/patients.json'
import patientData from '../../data/patientData'
import { Patient, NonSensitivePatientData, NewPatient } from '../types';


const patients: Array<Patient> = patientData as Array<Patient>;

const getPatients = (): Array<Patient> => {
    return patients;
};

const getPatient = (id: string): Patient | undefined => {
    return patients.find(patient => patient.id === id);
};

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const makeId = function () {
    const chars = 'ABCDE23456789';
    let result = '';
    for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const addPatient = (entry: NewPatient): Patient => {

    const newPatient = {
        id: makeId(),
        ...entry
    };

    patients.push(newPatient);
    return newPatient;
}

export default {
    getPatients,
    getPatient,
    getNonSensitivePatientData,
    addPatient
};