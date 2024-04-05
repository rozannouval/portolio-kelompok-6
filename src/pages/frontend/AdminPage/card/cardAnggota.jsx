//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import axios
import axios from "axios";

function CardAnggota() {
  //define state
  const [data, setDatas] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData, atau fectData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("http://localhost:3000/api/anggota");
    //get response data
    const data = await response.data.data;

    //assign response data to state "data"
    setDatas(data);
  };

  //function "deletePost"
  // const deletePost = async (id) => {

  //     //sending
  //     await axios.delete(`http://localhost:3000/api/anggota/delete/${id}`)

  //     //panggil function "fetchData"
  //     fectData()

  //     .then(() => {

  //         //redirect
  //         window.location.replace('/data');
  //     })
  // }

  return (
    <Container className="container">
      <Row>
        <Col>
          <Card className="card-container">
            <Card.Body>
              <Button as={Link} to="/api/create" className="btn-tambah">
                TAMBAH ANGGOTA
              </Button>
              <Table className="tabel-container">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>imageURL</th>
                    <th>deskripsi_singkat</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.nama}</td>
                      <td>{data.imageURL}</td>
                      <td>{data.deskripsi_singkat}</td>
                      {/* <td className="text-center">
                                                <Button as={Link} to={`/data/edit/${data.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
                                                <Button onClick={() => deletePost(data.id)} variant="danger" size="sm">DELETE</Button>
                                            </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardAnggota;
