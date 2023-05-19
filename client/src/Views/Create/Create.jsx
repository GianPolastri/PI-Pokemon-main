import React from "react";
import "./Create.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {validator, disable} from "./createUtils"

const Create = () => {
    const [newPokemon, setNewPokemon] = useState({
        name: "",
        img: "",
        hp: 0,
        atk: 0,
        def: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
    });

    const [allTypes, setAllTypes] = useState([]);
    const [typesLoaded, setTypesLoaded] = useState(false);

    const [errors, setErrors] = useState({
        name: "Este campo es obligatorio",
        img: "Este campo es obligatorio",
        hp: "Este campo es obligatorio",
        atk: "Este campo es obligatorio",
        def: "Este campo es obligatorio",
        speed: "Este campo es obligatorio",
        height: "Este campo es obligatorio",
        weight: "Este campo es obligatorio",
    });

    const getTypes = async () => {
        const types = (await axios.get("http://localhost:3001/type")).data;
        setAllTypes(types);
        setTypesLoaded(true);
    };

    useEffect(() => {
        getTypes();
        console.log(allTypes);
    }, [typesLoaded]);



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "types") {
            const typesID = Number(value);
            console.log(typesID);
            if (!newPokemon.types.includes(typesID)) {
                setNewPokemon({
                    ...newPokemon,
                    types: [...newPokemon.types, typesID],
                });
            }
        } else {
            setNewPokemon({
                ...newPokemon,
                [name]: value,
            });
        }
        validator(
            {
                ...newPokemon,
                [name]: value,
            },
            name,
            errors,
            setErrors
        );
    };

    return (
        <div>
            {console.log(newPokemon)}
            {console.log(errors)}
            <form action="">
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="img">Imagén: </label>
                    <input type="text" name="img" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="hp">HP: </label>
                    <input type="number" name="hp" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="atk">Attack: </label>
                    <input type="number" name="atk" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="def">Defense: </label>
                    <input type="number" name="def" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="speed">Speed: </label>
                    <input type="number" name="speed" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input
                        type="number"
                        name="height"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight: </label>
                    <input
                        type="number"
                        name="weight"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="types">Type/s: </label>
                    <select name="types" id="" multiple onChange={handleChange}>
                        {allTypes.map((type) => (
                            <option value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <input
                        placeholder="No selection"
                        value={newPokemon.types
                            .map(
                                (typeID) =>
                                    allTypes.find((type) => type.id === typeID)
                                        ?.name || ""
                            )
                            .join(", ")}
                        readOnly
                    />
                </div>
                <div>
                    <button type="submit" disabled={disable(errors)}>Create</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
