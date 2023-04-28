import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js'; // import the data array

function App() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tableData, setTableData] = useState(data); // use the imported data array

  const onSearch = (searchTerm) => {
    // filter the data based on the search term and category filter
    const filteredData = data.filter((item) => {
      return (
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) && (
        categoryFilter === '' || item.category === categoryFilter
      );
    });

    setTableData(filteredData);
    setSearch(searchTerm);
  };

  const onCategoryFilter = (category) => {
    setCategoryFilter(category);
    onSearch(search);
  }

  const categories = [...new Set(data.map(item => item.category))]; // get unique categories from data

  return (
    <div>
      <Container>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => onSearch(e.target.value)}
              placeholder='Search events'
            />
            <DropdownButton
              as={InputGroup.Append}
              variant='outline-secondary'
              title={categoryFilter || 'Category'}
            >
              <Dropdown.Item onClick={() => onCategoryFilter('')}>All categories</Dropdown.Item>
              {categories.map((category, index) => (
                <Dropdown.Item key={index} onClick={() => onCategoryFilter(category)}>{category}</Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Address</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
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
