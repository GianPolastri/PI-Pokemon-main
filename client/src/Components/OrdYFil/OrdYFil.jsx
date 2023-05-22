import React from 'react'
import { useDispatch } from 'react-redux';
import { filters, originFilters } from '../../Redux/Actions/Actions';

const OrdYFil = ({allTypes}) => {

    const dispatch =  useDispatch()

    const filter = (event) => {
      dispatch(filters(event.target.value))

    }

    const originFilter = (event) => {
      dispatch(originFilters('0'))
      dispatch(originFilters(event.target.value))
    }

  return (
    <div>
        <select name="ordenamiento" id="order">
            <option defaultChecked value="">-</option>
        </select>

        <div>
          <label htmlFor="filtrado-type">Tipo: </label>
          <select name="filtrado-type" id="type-filter" onChange={filter}>
              <option defaultChecked value="0">-</option>
              {allTypes.map(type=><option value={type.name}>{type.name}</option>)}  
          </select>
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="filtrado-origen">Origen: </label>
          <select name="filtrado-origen" id="origin-filter" onChange={originFilter}>
            <option defaultChecked value="0">-</option>
            <option value="originals">Originales</option>
            <option value="created">Creados</option>
          </select>
        </div>
    </div>
  )
}

export default OrdYFil;