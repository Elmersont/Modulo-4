import Badge from 'react-bootstrap/Badge';

const Tags = ({color, texto}) => {
    return (
        <div>
            <Badge bg = {color} style={{width:"10rem"}} > {texto} </Badge>
        </div>
    );
};

export default Tags;