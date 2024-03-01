import Card from 'react-bootstrap/Card'
import Tags from './Tags';

const MyCard = ({imagen, nombre, info, color, texto}) => {
    return (
        <>

            <Card style={ { width: "18rem", height:"25rem" } }>

                <Card.Img variant="top" src={imagen} style={{height:"10rem"}}/>

                <Card.Body>

                    <Card.Title> {nombre}</Card.Title>

                    <Card.Text>{info}</Card.Text>

                </Card.Body>
                
                <Tags color = {color} texto = {texto} />
            </Card>

        </>

    );
};

export default MyCard