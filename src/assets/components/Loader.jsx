import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <center>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </center>
  );
}

export default Loader;