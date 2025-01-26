import React, { useState, useRef } from "react";
import axios from 'axios';
import WeatherCards from "../components/WeatherCards.jsx"
import "../components/City.css";


const Weather = () => {

    const userCityRef = useRef(null);
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState([]);

    const getBackgroundVideo = () => {
        switch (cityName) {
            case 'karachi':
                return "/video/karachi.mp4";
            case 'lahore':
                return "/video/lahore.mp4";
            case 'islamabad':
                return "/video/islamabad4.mp4";
            case 'murree':
                return "/video/murree.mp4";
            case 'peshawar':
                return "/video/video6.mp4";
            case 'multan':
                return "/video/video5.mp4";
            default:
                return "/video/defult2.mp4";
        }
    };


    const getCityName = async (event) => {
        event.preventDefault();
        const cityNameInput = userCityRef.current.value.trim();
        if (!cityNameInput) {
            console.error("City name is required!");
            return;
        }
        setCityName(cityNameInput);


        const APIkey = "6f1ad9775d3cdc8ad9ea341dbf97abe7";
        try {
            const response = await axios.get(

                `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${APIkey}&units=metric`
            );

            setWeather([response.data]);

        } catch (error) {
            // console.log(e);
            setWeather([]);
        }
    };
    return (
        <>

            {/* <div className={`weather ${getBackgroundClass()}`}> */}
            <div className="weather">
                {/* Background video */}
                <video
                    className="weather-video"
                    autoPlay
                    loop
                    muted
                    src={getBackgroundVideo()}
                ></video>
                <div className="cards">
                    <div className="parts">
                        <form >
                            <label htmlFor="userCity"></label>
                            <input
                                type=" text"
                                id="userCity"
                                placeholder="Enter City Name"
                                ref={userCityRef}
                            />
                            <button onClick={getCityName}>Get Weather</button>
                        </form>
                        {weather.length ? (
                            <WeatherCards weather={weather} />
                        ) : (

                            <p className="para"><video className="bg-vid" autoPlay loop muted src={"/video/defult1.mp4"}></video>Data not found</p>

                        )}
                        </div>

                    </div>
                </div>
            </>
            );
};

        export default Weather