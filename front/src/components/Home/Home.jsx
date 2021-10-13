import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { DataContext } from "../../context/auth.context";

import axiosHook from '../../hooks/axios-hook';
import { Link } from "react-router-dom";

const Home = () => {

  const { loading, result } = axiosHook(`http://localhost:5000/api/products`)

  const { cart, setCart } = useContext(DataContext)

  const { user } = useContext(DataContext)

  const [manufacture, setManufacture] = useState([])
  const [search, setSearch] = useState('')
  const [data, setData] = useState('')
  const [busqueda, setBusqueda] = useState(false)


  useEffect(() => {
    axios.get(`http://localhost:5000/api/manufactures`)
      .then(res => setManufacture(res.data))
  }, [loading])

  let arr = result.slice(0, 99)
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
            } else {
              return null;
            }
          })}
        <img src={data.images} alt={data.name} width='250em' height='250em' />
      </div>
    )
  }

  const handleChange = (event) => {
    setBusqueda(true)
    setSearch(event.target.value)
    filter(event.target.value)
  }

  const filter = (inputSearch) => {
    var searchResult = arr.filter((element) => {
      if (element.name.toString().toLowerCase().includes(inputSearch.toLowerCase())) {
        return element;
      } else {
        return null;
      }
    })
    setData(searchResult)
  }

  const handleRowSelected = (event) => {
    if (user != null) {
      const selected = event.selectedRows
      setCart(selected.filter(function (param) {
        if (!cart.includes(param.article_key)) {
          return param.article_key
        } else {
          return null;
        }
      }))
    }
  }

  const contextActions = React.useMemo(() => {

    return (
      <>
        <Link to='/cart'>
          <button key="delete" className='add_btn' >
            Add Cart
          </button>
        </Link>
      </>
    );
  }, []);


  return (
    <section className='homeBox'>
      <article className='inpBox'>
        <input type="text" value={search} placeholder='Busqueda por articulo o fabricante' onChange={handleChange} />
        <button>
          <FontAwesomeIcon icon={faSearch} size='lg' color='#F5CB5C' />
        </button>
      </article>
      <article className='tableBox'>
        {busqueda === true ? <DataTable
          columns={columnas}
          data={data}
          title={'List of products'}
          progressPending={loading}
          pagination={true}
          fixedHeaderScrollHeight={'30em'}
          defaultSortFieldId={3}
          expandableRows
          sortFunction={customSort}
          expandableRowsComponent={ExpandedComponent}
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          contextActions={contextActions}

        /> : <DataTable
          columns={columnas}
          data={arr}
          title={'List of products'}
          progressPending={loading}
          pagination={true}
          fixedHeaderScrollHeight={'10em'}
          defaultSortFieldId={3}
          expandableRows
          sortFunction={customSort}
          expandableRowsComponent={ExpandedComponent}
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          contextActions={contextActions}
        />}
      </article>
    </section>
  );
};

export default Home;