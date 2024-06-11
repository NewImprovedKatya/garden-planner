import { Container, Row, Col, Button } from 'reactstrap';
import PlantsDetail from '../features/plants/PlantsDetail';
import PlantsList from '../features/plants/PlantsList';
import { selectRandomPlant } from '../features/plants/plantSlice';
import { selectPlantById } from '../features/plants/plantSlice';
import { useState } from 'react';

const MyPlantsPage = () => {
    // const [selectedPlant, togglePlant] = useState(selectRandomPlant());
    const [plantId, setPlantId] = useState(0);
    const selectedPlant = selectPlantById(plantId);

    return (
        <Container>
           {/*  <Button onClick={() => togglePlant(selectRandomPlant())} >
                Select Random Plant
            </Button> */}
            <Row>
                <Col sm='5' md='7'>
                    <PlantsList setPlantId={setPlantId}/>
                </Col>
                <Col sm='7' md='5'>
                    <PlantsDetail plant={selectedPlant} />
                </Col>
            </Row>
        </Container>
    );
};

export default MyPlantsPage;