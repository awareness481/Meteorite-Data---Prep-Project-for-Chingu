import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

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
  const fetchData = async (url) => {
    const response = await axios
      .get('https://data.nasa.gov/resource/gh4g-9sfh.json?' + url)
      .then(res => res.data);
    const data = _.map(response, (o) => {
      if (o.year) o.year = o.year.substring(0, 4);
      return o;
    });
    getData(data);
  }

  const [query, setQuery] = useState("");

  const [data, getData] = useState(() => {
    fetchData('$limit=10');
    fetchData('$limit=50000');
  });

  useEffect(() => {
      if (!validateQuery()) return;
      fetchData(`$where=name like '%25${query}%25'`);
  });

  

  const validateQuery = () => {
    const re = /^[\w\ ]+$/gi;
    if (re.test(query) && query.length > 0) return true;

    if (!query || query.length === 0) {
      return false;
    }
    
    
  }

  return (
    <div className="App">
      <div className='header'>
        Meteorite Explorer
      </div>
      <div className='search'>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => setQuery(value)}
        />
      </div>
      <Table dataSource={data} columns={columns}/>;
    </div>
  );
}

export default App;
