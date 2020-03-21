import diagnoseData from '../../data/diagnoses.json'
import { Diagnose } from '../types';


//const diaries: Array<DiaryEntry> = diaryData;

const diagnoses: Array<Diagnose> = diagnoseData as Array<Diagnose>;

const getEntries = (): Array<Diagnose> => {
    return diagnoses;
};
 

const addEntry = () => {
    return null;
};

export default {
    getEntries, 
    addEntry
};