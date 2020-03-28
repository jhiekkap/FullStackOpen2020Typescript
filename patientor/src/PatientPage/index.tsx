import React from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../state";
import { Container, Table, Button } from "semantic-ui-react";
import { Patient } from "../types";
import HealthRatingBar from "../components/HealthRatingBar";
import { Icon } from 'semantic-ui-react';


const PatientPage: React.FC = () => {

  const [{ patients }, dispatch] = useStateValue();



  let { id }: any = useParams();
  const patient: Patient | undefined = Object.values(patients).find((patient: Patient) => patient.id === id);

  if (patient) {
    return (
      <div className="App"> 
        <Container>
          <h2>{patient.name} <Icon name={patient.gender === 'male' ? 'man' : 'woman'} /></h2>
          <p>ssn: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
          <span>health rating: <HealthRatingBar showText={false} rating={1} /></span>
          <h4>entries</h4>
          {patient.entries && patient.entries.map((entry, e) =>
            <div key={e}>
              <span>{entry.date}{' '}{entry.description}</span>
              <ul>
                {entry.diagnosisCodes && entry.diagnosisCodes.map((code, c) =>
                  <li key={c}>{code}</li>
                )}
              </ul>
            </div>)}
        </Container>
      </div>
    );
  } else {
    return <div>Unknown patient</div>
  }

};

export default PatientPage;
