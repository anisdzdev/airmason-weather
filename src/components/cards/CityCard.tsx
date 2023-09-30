import WeatherIcon from "../helper/WeatherIcon";
import {useWeather} from "../../hooks/useWeather";
import {countries} from 'country-data';
import {LoadingCard} from "./LoadingCard";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import SmallFavoriteButton from "../buttons/SmallFavoriteButton";
import MoreDetailsButton from "../buttons/MoreDetailsButton";

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
                <SmallFavoriteButton isFavorite={isFavorite} handleFavoriteChange={handleFavoriteChange}/>
                <h1 className="text-2xl font-bold ml-5">{props.city}</h1>
                <MoreDetailsButton moreDetails={moreDetails}/>
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