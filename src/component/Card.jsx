import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Team from "../pages/Team";

function Cards({team}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={team.image} />
      <Card.Body>
        <Card.Title>{team.title}</Card.Title>
        <Card.Text>{team.email}</Card.Text>
        <a href={team.link}>
          <Button variant="primary">View Profile</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Cards;
