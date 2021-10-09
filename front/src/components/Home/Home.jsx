import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';
import axios from "axios";

import axiosHook from '../../hooks/axios-hook';




const Home = () => {

  const { loading, result } = axiosHook(`http://localhost:5000/api/products`)

  const [manufacture, setManufacture] = useState([])
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/manufactures`)
      .then(res => setManufacture(res.data))
  }, [loading])


  let arr = result.slice(0, 99)

  const customSort = (rows, selector, direction) => {
    return rows.sort((rowA, rowB) => {
      const aField = parseInt(selector(rowA))
      const bField = parseInt(selector(rowB))

      let comparison = 0;

      if (aField > bField) {
        comparison = -1;
      } else if (aField < bField) {
        comparison = 1;
      }

      return direction === 'desc' ? comparison * -1 : comparison;
    });
  };

  const ExpandedComponent = ({ data }) => {
    return (
      <div>
        {
          manufacture.map((param, i) => {
            if (param.manufactures_key === data.manufactures_key) {
              return (
                <div className='extendText' key={i}>
                  <h3>Manufacter: {param.name}</h3>
                  <p>Direction: {param.direction}</p>
                  <p>CIF: {param.cif}</p>
                </div>
              )
            }
          })}
        <img src={data.images} alt={data.name} width='250em' height='250em' />
      </div>
    )
  }

  const handleChange = (event)=> {
    setSearch(event.target.value)
    filter(event.target.value)
  }

  const filter = (inputSearch) =>{
    var searchResult = arr.filter((element) => {
      if(element.name.toString().toLowerCase().includes(inputSearch.toLowerCase())){
        return element;
      }
    })
    arr = searchResult
    console.log(arr);
  }

  const columnas = [
    {
      name: 'name',
      selector: row => row.name,

    },
    {
      name: 'price',
      selector: row => row.price,
      sortable: true,

    },
    {
      name: 'relevance',
      selector: row => row.relevance,
      sortable: true,
      omit: true,
    }
  ]

  return (
    <section>
      <p>
        Esto es el home
      </p>
      <input type="text" value={search} placeholder='Busqueda por articulo o fabricante' onChange={handleChange} />
      <button>Buscar</button>
      <DataTable
        columns={columnas}
        data={arr}
        title={'Productos'}
        progressPending={loading}
        pagination={true}
        fixedHeaderScrollHeight={'30em'}
        defaultSortFieldId={3}
        expandableRows
        sortFunction={customSort}
        expandableRowsComponent={ExpandedComponent}
      />
    </section>


  );
};

export default Home;
