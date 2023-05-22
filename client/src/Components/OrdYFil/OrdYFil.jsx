import React from 'react'
import { useDispatch } from 'react-redux';
import { filters } from '../../Redux/Actions/Actions';

const OrdYFil = ({allTypes}) => {

    const dispatch =  useDispatch()

    const filter = (event) => {
       dispatch(filters(event.target.value))
       console.log(event.target.value);
    }

  return (
    <div>
        <select name="ordenamiento" id="order">
            <option defaultChecked value="">-</option>
        </select>
        <select name="filtrado" id="filter" onChange={filter}>
            <option defaultChecked value="0">-</option>
            {allTypes.map(type=><option value={type.name}>{type.name}</option>)}  
        </select>
    </div>
  )
}

export default OrdYFil;