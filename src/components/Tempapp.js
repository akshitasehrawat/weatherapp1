import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Dehradun");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5775f458a287a20b491797af3438d32b`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                        placeholder="search city"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <p className="errMsg"> No Data Found</p>
                ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view " style={{ color: "white" }}></i>
                                    {search}

                                </h2>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">{city.temp_min}°Cel | {city.temp_max}°Cel</h3>
                            </div>
                            <div className="wave"></div>
                            <div className="wave-two"></div>
                            <div className="wave-three"></div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Tempapp;