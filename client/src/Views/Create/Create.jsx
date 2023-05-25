import React from "react";
import "./Create.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { validator, disable } from "./createUtils";
import { useDispatch, useSelector } from "react-redux";
import { createNewPokemon, getAllPokemons } from "../../Redux/Actions/Actions";
import { useHistory } from "react-router-dom";

const Create = () => {
    // const updatedPokemons = useSelector((state)=>state.allPokemons)
    const dispatch = useDispatch();

    const history = useHistory();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createNewPokemon(newPokemon));
        history.push("/home");
    };

    return (
        <div className="create-container">
            <div className="form-container">
                {console.log(newPokemon)}
                {console.log(errors)}
                <form action="" onSubmit={handleSubmit} className="form-inputs">
                    <div className="form-column">
                        <div className="form-row">
                            <label htmlFor="name">Nombre: </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="img">Imagén: </label>
                            <input
                                type="text"
                                name="img"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="hp">HP: </label>
                            <input
                                type="number"
                                name="hp"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="atk">Attack: </label>
                            <input
                                type="number"
                                name="atk"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="def">Defense: </label>
                            <input
                                type="number"
                                name="def"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="speed">Speed: </label>
                            <input
                                type="number"
                                name="speed"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="form-row">
                            <label htmlFor="height">Height: </label>
                            <input
                                type="number"
                                step="0.01"
                                name="height"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="weight">Weight: </label>
                            <input
                                type="number"
                                step="0.01"
                                name="weight"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="types">Type/s: </label>
                            <br />
                            <select
                                name="types"
                                id=""
                                multiple
                                onChange={handleChange}
                                size="3"
                                className="types-selector"
                            >
                                {allTypes.map((type) => (
                                    <option value={type.id}>{type.name}</option>
                                ))}
                            </select>
                            <br />
                            <input
                                placeholder="No selection"
                                value={newPokemon.types
                                    .map(
                                        (typeID) =>
                                            allTypes.find(
                                                (type) => type.id === typeID
                                            )?.name || ""
                                    )
                                    .join(", ")}
                                readOnly
                            />
                        </div>

                        <div>
                            <button type="submit" disabled={disable(errors)}>
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>

{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <div className="form-container">
                <div className="form-inputs" id="inputs-display">
                    <div className="img-container">
                        <img
                            src={newPokemon.img}
                            alt=""
                        />
                    </div>
                    <div className="info-container" id="info-display">
                        <div className="stats-container">
                            <div className="stat">
                                <label htmlFor="hp"></label>
                                HP:{" "}
                                <meter
                                    id="hp"
                                    value={newPokemon.hp}
                                    min="0"
                                    max="100"
                                    low="20"
                                    high="60"
                                    optimum="80"
                                ></meter>
                            </div>

                            <div className="stat">
                                <label htmlFor="atk"></label>
                                Attack:{" "}
                                <meter
                                    id="atk"
                                    value={newPokemon.atk}
                                    min="0"
                                    max="100"
                                    low="20"
                                    high="60"
                                    optimum="80"
                                ></meter>
                            </div>

                            <div className="stat">
                                <label htmlFor="def"></label>
                                Defense:{" "}
                                <meter
                                    id="def"
                                    value={newPokemon.def}
                                    min="0"
                                    max="100"
                                    low="20"
                                    high="60"
                                    optimum="80"
                                ></meter>
                            </div>

                            <div className="stat">
                                <label htmlFor="speed"></label>
                                Speed:{" "}
                                <meter
                                    id="speed"
                                    value={newPokemon.speed}
                                    min="0"
                                    max="100"
                                    low="20"
                                    high="60"
                                    optimum="80"
                                ></meter>
                            </div>
                        </div>

                        <div className="extra-container" id="extra-container-display">
                            <div className="data-display">
                                <span>
                                    <b>Name: {newPokemon.name}</b>
                                </span>
                                <span>
                                    <b>Height: {newPokemon.height}m</b>
                                </span>
                                <span>
                                    <b>Weight: {newPokemon.weight}Kg</b>
                                </span>
                                <span>
                                    <b>
                                        Types:{" "}
                                        <span>
                                            /
                                            {console.log(newPokemon.types)}
                                            {console.log(allTypes)}
                                            {newPokemon.types.filter(
                                                (i) => (
                                                    <span>{allTypes.forEach( t => {
                                                        if(t.id === i) return (<span> {t.name} </span>)
                                                    })}</span>
                                                )
                                            )}{" "}

                                        </span>
                                    </b>
                                </span>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div className="types-section">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
