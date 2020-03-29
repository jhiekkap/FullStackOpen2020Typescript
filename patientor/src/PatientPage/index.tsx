import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useStateValue } from "../state";
import { Icon, Container, Button } from "semantic-ui-react";
import { Patient } from "../types";
import EntryDetails from './EntryDetails'
import AddEntryModal from './AddEntryModal'


const PatientPage: React.FC = () => {

  const [{ patients, diagnoses }] = useStateValue();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();


  console.log('DIAGNOOSIT', diagnoses)

  const submitNewPatient = (props:any) => {
    /*  try {
       const { data: newPatient } = await axios.post<Patient>(
         `${apiBaseUrl}/patients`,
         values
       );
       dispatch(addPatient(newPatient));
       closeModal();
     } catch (e) {
       console.error(e.response.data);
       setError(e.response.data.error);
     } */
    alert(JSON.stringify(props ))
  }

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };


  let { id }: any = useParams();
  const patient: Patient | undefined = Object.values(patients).find((patient: Patient) => patient.id === id);

  if (patient) {
    return (
      <Container className="App">
        <h2>{patient.name} <Icon name={patient.gender === 'male' ? 'man' : 'woman'} /></h2>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        {patient.entries &&
          <Container>
            <h4>entries</h4>
            {patient.entries.map((entry, e) => <EntryDetails key={e} entry={entry} diagnoses={diagnoses} />)}
          </Container>}
        <Button onClick={openModal}>Add entry</Button>
        <AddEntryModal
          modalOpen={modalOpen}
          onSubmit={submitNewPatient}
          error={error}
          onClose={closeModal}
        />
      </Container>
    );
  } else {
    return <div>Unknown patient</div>
  }

};

export default PatientPage;
