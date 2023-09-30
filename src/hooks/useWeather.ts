import { useState, useEffect } from 'react';
import axios from "axios";
import {toast} from "react-toastify";

export const useWeather = (searchCity: string|undefined, isMetric: boolean) : [any, boolean, any] => {
    const [weather, setWeather] = useState<any>('');
    const [error, setError] = useState<any>(undefined);
    const [loading, setLoading] = useState(false);

    const searchByLocation = async () => {
        if (searchCity) {
            setLoading(true);
            const search = searchCity.charAt(0).toUpperCase() + searchCity.slice(1);
            try {
                const {data: w} = await axios.get(`${process.env.REACT_APP_API_URL}/weather?q=${search}&units=${isMetric ? 'metric' : 'imperial'}&appid=${process.env.REACT_APP_API_KEY}`);
                if (w.cod !== '404') {
                    setWeather({ ...w, city: w.name, countryCode: w.sys.country });
                    setError(false);
                    setLoading(false);
                } else {
                    toast.clearWaitingQueue()
                    toast.error("Unable to find city")
                    setError({ error: 'City not found' });
                    setLoading(false);
                }
            } catch (error : any) {
                toast.clearWaitingQueue()
                console.log(error);
                setError({ error: "Error loading weather data about this city" });
                setLoading(false);
            }
        } else {
            toast.clearWaitingQueue()
            toast.error("Unable to find city")
            setError({ error: "Error loading weather data about this city" })
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        searchByLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchCity, isMetric]);

    return [weather, loading, error];
}
