import { Col, Row } from "reactstrap";
import PlantCard from "./PlantCard";
import { selectAllPlants } from "./plantSlice";

const PlantsList = ({setPlantId}) => {
    const plants = selectAllPlants();

    return (
        <Row className='ms-auto'>
            {plants.map((plant) => {
                return (
                    <Col md='5' className="m-4" key={plant.id} onClick={() => setPlantId(plant.id)}>
                        <PlantCard plant={plant} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PlantsList;