import { Col, Card, CardHeader, CardTitle, CardText, CardFooter, CardBody } from "reactstrap";

const PlantsDetail = ({plant}) => {
    const { name, type, zone, description } = plant;

    return (
        <Col>
            <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{type}</CardText>
                <CardText>{description}</CardText>
            </CardBody>
            <CardFooter>
                {zone}
            </CardFooter>
        </Card>
        </Col>
    );
};

export default PlantsDetail;