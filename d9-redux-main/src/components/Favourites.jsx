import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  const list = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button variant="primary" onClick={() => navigate("/")}>
            Home
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          {list.length === 0 ? (
            <p>Non hai ancora aggiunto lavori ai preferiti.</p>
          ) : (
            <ListGroup>
              {list.map((job, i) => (
                <ListGroupItem key={job._id || i} className="d-flex justify-content-between align-items-center">
                  <Link to={`/jobs/${job._id}`} className="text-decoration-none">
                    {job.title || "Job"}
                  </Link>
                  <Button
                variant="danger"
                  className="mr-2"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITE",
                      payload: i,
                    })
                  }
                >RIMUOVI DAI PREFERITI
                </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

