import {useIsMetric} from "../../hooks/useTempUnit";
import {Link, useParams} from "react-router-dom";
import {Navbar} from "../../components/navbar/Navbar";
import MainDetailLayout from "../../components/cards/MainDetailLayout";
import {useWeather} from "../../hooks/useWeather";
import {useFavorites} from "../../hooks/useFavorites";
import LongFavoriteButton from "../../components/buttons/LongFavoriteButton";

function City() {
    let { city } = useParams();
    const [favorites, setFavorites] = useFavorites();
    const [isMetric, setIsMetric] = useIsMetric();
    const [weather] = useWeather(city, isMetric);

    const isFavorite : boolean = city != null && favorites.length > 0 && new RegExp(favorites.join("|"), "i").test(city);

    return (
        <div>
            <Navbar isMetric={isMetric} setIsMetric={setIsMetric}/>
            <div className="flex w-1/2 mx-auto my-10 flex-col">
                <div className="flex flex-row">
                    <Link to={'/'} className="text-3xl font-bold text-blue-500 mr-2">{"🔙"}</Link>
                    <h1 className="text-3xl font-bold text-neutral-800">Weather in {city}</h1>
                    <LongFavoriteButton city={city} isFavorite={isFavorite} setFavorites={setFavorites}/>
                </div>
                <MainDetailLayout data={weather} isMetric={isMetric}/>
            </div>
        </div>
    );
}

export default City;
