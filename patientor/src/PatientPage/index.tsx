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
 
  console.log('PATIENT ', patient)
  console.log('PATIENTS', patients)
  if (patient) {
    return (
      <div className="App">
        <Container textAlign="center">
          <h3>Patient info</h3>
        </Container>
        <Container>
          <h2>{patient.name} <Icon name={patient.gender === 'male' ? 'man' : 'woman'}  /></h2>       
          <p>ssn: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
          <span>health rating: <HealthRatingBar showText={false} rating={1} /></span>
        </Container>
        {/* <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Occupation</Table.HeaderCell>
              <Table.HeaderCell>Health Rating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row key={patient.id}>
              <Table.Cell>{patient.name}</Table.Cell>
              <Table.Cell>{patient.gender}</Table.Cell>
              <Table.Cell>{patient.occupation}</Table.Cell>
              <Table.Cell>
                <HealthRatingBar showText={false} rating={1} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}
      </div>
    );
  } else {
    return <div>Unknown patient</div>
  }

};

export default PatientPage;
