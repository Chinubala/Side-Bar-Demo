import React, { useEffect, useState } from 'react';
import './Style.css';
import { FaStreetView } from "react-icons/fa";


const Weather = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        document.title="Weather"
        getWeather();
    }, [search])

    const getWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=308aaa0447c823e10d88f27f38a1a748`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCity(data.main)

    }

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row text-center justify-content-center'>
                    <h1>Weather</h1>
                    <div className='btn btn-info btn-lg mb-5'>
                        <div class="col-md-auto">
                            <div class="form-group row inputField mb-3 p-5 weather-style">
                                <input type="search"
                                    class="form-control"
                                    placeholder=' Enter City Name'
                                    onChange={(event) => { setSearch(event.target.value) }}
                                />
                            </div>
                            {!city ? <p>No Data Found</p> :
                                <>


                                    <div className="icon "><FaStreetView /><h1>{search}</h1></div>
                                    <div className='mt-5'><h1>{city.temp}°C</h1></div>
                                    <div className='mt-5'><h3>Min :{city.temp_min} °C| Max :{city.temp_max} °C</h3></div>


                                    <div className='wave'></div>
                                    <div className='waveTwo'></div>
                                    <div className='waveThree'></div>

                                </>
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
};

export default Weather;