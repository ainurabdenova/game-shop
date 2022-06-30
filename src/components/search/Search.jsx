import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentGame } from "../../store/slice/games"
import { setInputText, setFilterDataSearch, setFilterDataDelete, setInputTextDelete } from "../../store/slice/searchFilter"
import "./Search.css";

function Search({ placeholder, data }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const text = useSelector(state => state.search.textEntered)
    const searchResult = useSelector(state => state.search.filterDataSearch)


    const handleFilter = (event) => {
        dispatch(setInputText(event.target.value))

        if (text === "") {
            dispatch(setFilterDataDelete())

        } else {
            dispatch(setFilterDataSearch(text))
        }
    };

    const handleClick = (e, value) => {
        e.stopPropagation();
        dispatch(setCurrentGame(value))
        dispatch(setFilterDataDelete())
        dispatch(setInputTextDelete())
        navigate(`/app/${value.title}`)
    }

    const clearInput = () => {
        dispatch(setFilterDataDelete())
        dispatch(setInputText(""))
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={text}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {searchResult.length === 0 ? (
                        <BiSearchAlt2 />
                    ) : (
                        <GrClose id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {searchResult.length != 0 && (
                <div className="dataResult">
                    {searchResult.slice(0, 15).map((value) => {
                        return (
                            <div className="dataItem" to={`/app/${value.title}`} key={value.id} onClick={(e) => handleClick(e, value)}>
                                <p>{value.title} </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export { Search };
