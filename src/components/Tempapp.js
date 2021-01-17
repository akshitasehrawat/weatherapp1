import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.WEATHER_API_KEY}`
            const response = await fetch(url);
            console.log(response)
            const resJson = await response.json();
        }

        fetchApi();
    })
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputFeild"
                        onChange={(event) => {

                        }} />
                </div>

                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view " style={{ color: "white" }}></i>Dehradun
                    </h2>
                    <h1 className="temp">
                        5.25Cel
                </h1>
                    <h3 className="tempmin_max">Min : 5.25Cel | Max : 5.25Cel</h3>
                </div>
                <div className="wave"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
            </div>
        </>
    )
}

export default Tempapp;