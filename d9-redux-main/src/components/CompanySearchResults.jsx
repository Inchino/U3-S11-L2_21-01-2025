import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const [addedToFavourites, setAddedToFavourites] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourite.list);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    initializeAddedToFavourites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  const initializeAddedToFavourites = () => {
    const initialState = {};
    favourites.forEach((job) => {
      initialState[job._id] = true;
    });
    setAddedToFavourites(initialState);
  };

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavourites = (job) => {
    dispatch({
      type: "ADD_TO_FAVOURITE",
      payload: job,
    });

    setAddedToFavourites((prevState) => ({
      ...prevState,
      [job._id]: true,
    }));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
        </Col>
      </Row>
      {jobs.map((job) => (
        <Row key={job._id} className="align-items-center my-2">
          <Col>
            <Job data={job} />
          </Col>
          <Col xs="3">
            <Button
              variant="success"
              className="d-flex align-items-center"
              onClick={() => handleAddToFavourites(job)}
              disabled={addedToFavourites[job._id]}
            >
              {addedToFavourites[job._id] ? (
                <span className="me-2">AGGIUNTO AI PREFERITI</span>
              ) : (
                <span className="me-2">AGGIUNGI AI PREFERITI</span>
              )}
            </Button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="text-end my-5">
          <Button variant="primary" onClick={() => navigate("/")}>
            Torna alla pagina principale
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

