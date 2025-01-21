import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ListIndicator = () => {
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourite.list)

  return (
    <div className="d-flex justify-content-center my-4">
      <Button
        onClick={() => navigate("/favourites")}
        className="d-flex align-items-center"
      >
        <h3>Preferiti: </h3>
        <span className="ms-2">{favourites.length}</span>
      </Button>
    </div>
  );
};

export default ListIndicator;
