import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    {
        id:1,
        date: '2023-04-06',
        address: 'Malmö',
        name: 'Summerburst',
        category: 'Rave'
    },
    {
        id:2,
        date: '2023-08-11',
        address: 'Stockholm',
        name: 'Kärleksklubben',
        category: 'R&B'
    },
    {
        id:3,
        date: '2023-03-07',
        address: 'Malmö',
        name: 'ROll ouy',
        category: 'Rave'
    }
])

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  const onSearch =  async (search_term) => {
    // gör sökning från databas
    let new_data = []

    // for(var x of data) {
    //     if(x.date.includes(search_term) || x.address.toLowerCase().includes(search_term) || x.name.toLowerCase().includes(search_term) || x.category.toLowerCase().includes(search_term)){
    //         new_data.push(x)
    //     }
    // }

    setSearch(search_term)
    setData(new_data)
  }

  return (
    <div>
      <Container>
        
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => onSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Adress</th>
              <th>Namn</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.address}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;