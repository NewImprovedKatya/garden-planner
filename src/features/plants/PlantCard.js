import { Card, CardHeader, CardTitle, CardText, CardFooter, CardBody } from "reactstrap";


const PlantCard = ({ plant }) => {
    const { name, type, zone } = plant;
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{type}</CardText>
            </CardBody>
            <CardFooter>
                {zone}
            </CardFooter>
        </Card>
    );
};

export default PlantCard;