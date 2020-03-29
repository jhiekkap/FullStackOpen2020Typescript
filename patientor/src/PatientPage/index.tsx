import React from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../state";
import { Icon, Container } from "semantic-ui-react";
import { Patient, Diagnosis } from "../types"; 
import EntryDetails from './EntryDetails'


const PatientPage: React.FC = () => {

  const [{ patients, diagnoses }] = useStateValue();

  console.log('DIAGNOOSIT', diagnoses)

  let { id }: any = useParams();
  const patient: Patient | undefined = Object.values(patients).find((patient: Patient) => patient.id === id);

  if (patient) {
    return (
      <div className="App">
        <Container>
          <h2>{patient.name} <Icon name={patient.gender === 'male' ? 'man' : 'woman'} /></h2>
          <p>ssn: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p> 
          <h4>entries</h4>
          {patient.entries && patient.entries.map((entry, e) => <EntryDetails key={e} entry={entry} diagnoses={diagnoses} />)}
        </Container>
      </div>
    );
  } else {
    return <div>Unknown patient</div>
  }

};

export default PatientPage;
