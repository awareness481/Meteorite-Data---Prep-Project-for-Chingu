import React from 'react';

//Styles
import "../sass/main.scss";
import { 
  Input,
  Table 
} from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Aachen',
    id: 1,
    classification: 'L5',
    mass: 21,
    nameType: 'Valid',
    fall: 'Fell',
    year: '1880',
    lat: 	'50.775000',
    lon: '6.083330'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Mass (g)',
    dataIndex: 'mass',
    key: 'mass'
  },
  {
    title: 'Type',
    dataIndex: 'nameType',
    key: 'nameType'
  },
  {
    title: 'Fall',
    dataIndex: 'fall',
    key: 'fall'
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year'
  },
  {
    title: 'Latitute',
    dataIndex: 'lat',
    key: 'lat'
  },
  {
    title: 'Longtitude',
    dataIndex: 'lon',
    key: 'long'
  }
];

const Search = Input.Search;

function App() {
  return (
    <div className="App">
      <div className='header'>
        Meteorite Explorer
      </div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
