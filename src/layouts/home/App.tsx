import {CityCard} from "../../components/cards/CityCard";
import {useIsCelsius} from "../../hooks/useTempUnit";
import {useFavorites} from "../../hooks/useFavorites";
import {Navbar} from "../../components/navbar/Navbar";

function App() {
    const [isCelsius, setIsCelsius] = useIsCelsius();
    const [favorites, setFavorites] = useFavorites();

    return (
        <div>
            <Navbar isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>
            <div className="flex w-1/2 mx-auto my-10 flex-col">
                <h1 className="text-3xl font-bold text-neutral-800">Favorites</h1>
                <div className="flex flex-wrap ml-10 flex-col items-center">
                    {
                        favorites.length > 0
                            ? favorites.map((city, index) => (
                                <CityCard key={index} city={city} isFavorite={true} isCelsius={isCelsius} updateFavorites={setFavorites}/>
                            ))
                            : <p className="text-xl mt-32 text-neutral-500">No favorites yet, search for a city and add it to your favorites!</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
