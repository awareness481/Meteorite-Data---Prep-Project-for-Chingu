import React, { useState } from 'react';
import axios from 'axios';

//Styles
import "../sass/main.scss";
import { 
  Input,
  Table 
} from 'antd';

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
    dataIndex: 'recclass',
    key: 'recclass',
  },
  {
    title: 'Mass (g)',
    dataIndex: 'mass',
    key: 'mass'
  },
  {
    title: 'Type',
    dataIndex: 'nametype',
    key: 'nametype'
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
    dataIndex: 'reclat',
    key: 'reclat'
  },
  {
    title: 'Longtitude',
    dataIndex: 'reclong',
    key: 'reclong'
  }
];



const Search = Input.Search;

const App = () => {
  const [data, getData] = useState(() => {
    const fetchData = async () => {
      const response = await axios
      .get('https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10')
      .then(res => res.data);
      getData(response);
    }
    fetchData();
  });
  console.log(data);


  return (
    <div className="App">
      <div className='header'>
        Meteorite Explorer
      </div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        className ="search"
        onSearch={value => console.log(value)}
      />
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
