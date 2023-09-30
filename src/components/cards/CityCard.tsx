import WeatherIcon from "../helper/WeatherIcon";
import {useWeather} from "../../hooks/useWeather";
import {countries} from 'country-data';
import {LoadingCard} from "./LoadingCard";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

export function CityCard(props: { city: string, updateFavorites: (city: string) => void, isMetric: boolean, isFavorite: boolean }) {
    const [isFavorite, setIsFavorite] = useState<boolean>(props.isFavorite);
    const [weather, loading, hasError] = useWeather(props.city, props.isMetric);
    const navigate = useNavigate()

    const handleFavoriteChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        props.updateFavorites(props.city);
        setIsFavorite(!isFavorite);
    }

    const moreDetails = () => {
        navigate(`/city/${props.city}`)
    }

    return loading ? <LoadingCard/>
        : <div className="flex flex-col w-[75%] m-5 rounded-[20px] shadow-card bg-white p-5 cursor-pointer" onClick={moreDetails}>
            <div className="flex items-center">
                <button onClick={handleFavoriteChange}>
                    {isFavorite ?
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="#ec8a1a" stroke="#ec8a1a" viewBox="-4.31 -4.31 56.56 56.56">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"
                               stroke="#CCCCCC" strokeWidth="0.47939999999999994"></g>
                            <g id="SVGRepo_iconCarrier"> <path style={{fill:"#ED8A19"}}
                                                               d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g>

                        </svg>
                        :
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="#ffffff" stroke="#ec8a1a" strokeWidth="3" viewBox="-4.31 -4.31 56.56 56.56">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"
                               stroke="#CCCCCC" strokeWidth="0.47939999999999994"></g>
                            <g id="SVGRepo_iconCarrier"> <path style={{fill:"#ffffff"}}
                                                               d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g>

                        </svg>
                    }
                </button>
                <h1 className="text-2xl font-bold ml-5">{props.city}</h1>
                <button className="ml-auto" onClick={moreDetails}>
                    <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="m6 18 6-6-6-6"/>
                    </svg>
                </button>
            </div>
            <div className="flex flex-row w-full">
                <div className="mr-8">
                    <WeatherIcon hasError={hasError} icon={weather?.weather?.[0]?.icon}/>
                </div>
                <div className="flex flex-col w-full h-full self-center">
                    <div className="flex justify-between items-center">
                        {!hasError && <div className="flex items-center">
                            <img
                                src={`https://hatscripts.github.io/circle-flags/flags/${weather?.countryCode?.toLowerCase()}.svg`}
                                alt={weather?.countryCode} width="18"/>
                            <h2 className="text-xl font-bold ml-2">{countries[weather?.countryCode]?.name}</h2>
                        </div>}
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold leading-none">{hasError ? "Something went wrong loading weather data" : weather?.weather?.[0]?.main}</h2>
                        {!hasError && <h2 className="text-3xl font-bold">{parseInt(weather?.main?.temp)} {props.isMetric ? '°C' : '°F'}</h2>}
                    </div>
                </div>
            </div>
        </div>
}