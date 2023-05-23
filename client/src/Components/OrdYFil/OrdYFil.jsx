import React from 'react'
import { useDispatch } from 'react-redux';
import { alfabeticOrder, filters, originFilters } from '../../Redux/Actions/Actions';

const OrdYFil = ({allTypes}) => {

    const dispatch =  useDispatch()

    const filter = (event) => {
      // dispatch(filters('0'))
      dispatch(filters(event.target.value))

    }

    const originFilter = (event) => {
      dispatch(originFilters('0'))
      dispatch(originFilters(event.target.value))
    }

    // const alfaOrder = (event) => {
    //   // dispatch(alfabeticOrder('0'));
    //   dispatch(alfabeticOrder(event.target.value));
    // }

  return (
    <div>
        <label htmlFor="orden-alfa">Alfabeticamente:</label>
        <select name="orden-alfa" id="alfa-order" /*onChange={alfaOrder}*/>
            <option defaultChecked value="0">-</option>
            <option  value="asc">Ascendente</option>
            <option  value="desc">Descendente</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <label htmlFor="orden-atk">Ataque:</label>
        <select name="orden-atk" id="atk-order">
            <option defaultChecked value="0">-</option>
            <option  value="asc">Ascendente</option>
            <option  value="desc">Descendente</option>
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