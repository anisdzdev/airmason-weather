import {useIsCelsius} from "../../hooks/useTempUnit";
import {useParams} from "react-router-dom";
import {Navbar} from "../../components/navbar/Navbar";

function City() {
    let { city } = useParams();
    const [isCelsius, setIsCelsius] = useIsCelsius();

    return (
        <div>
            <Navbar isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>
            <div className="flex w-1/2 mx-auto my-10 flex-col">
                <h1 className="text-3xl font-bold text-neutral-800">Current Weather in {city}</h1>
            </div>
        </div>
    );
}

export default City;
