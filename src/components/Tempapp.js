import React from 'react';
import './css/style.css';

const Tempapp = () => {
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
            </div>
            <div className="info">
                <h2 className="location">
                    <i class="fas fa-street-view"> Dehradun</i>
                </h2>
                <h1 className="temp">

                </h1>
                <h3 className="tempmin_max">Min : 5.25Cel | Max : 5.25Cel</h3>
            </div>
        </>
    )
}

export default Tempapp;