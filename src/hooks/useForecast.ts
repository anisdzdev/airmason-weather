import { useState, useEffect } from 'react';
import axios from "axios";
import {toast} from "react-toastify";

export const useForecast = (searchCity: string|undefined, isMetric: boolean) : [any, boolean, any] => {
    const [forecast, setForecast] = useState<any>('');
    const [error, setError] = useState<any>(undefined);
    const [loading, setLoading] = useState(false);

    const searchByLocation = async () => {
        if (!process.env.REACT_APP_API_KEY || !process.env.REACT_APP_API_URL) {
            setLoading(false)
            setError({ error: 'API key or API URL not found' })
            toast.dismiss()
            return toast.error('API key or API URL not found')
        }
        if (searchCity) {
            setLoading(true);
            const search = searchCity.charAt(0).toUpperCase() + searchCity.slice(1);
            try {
                const {data: w} = await axios.get(`${process.env.REACT_APP_API_URL}/forecast?q=${search}&units=${isMetric ? 'metric' : 'imperial'}&appid=${process.env.REACT_APP_API_KEY}`);
                if (w.cod !== '404') {
                    setForecast(w);
                    setError(false);
                    setLoading(false);
                } else {
                    toast.dismiss()
                    toast.error("Unable to find city");
                    setError({ error: 'City not found' });
                    setLoading(false);
                }
            } catch (error : any) {
                console.log(error);
                toast.dismiss()
                toast.error("Error loading weather data about this city");
                setError({ error: "Error loading weather data about this city" });
                setLoading(false);
            }
        } else {
            toast.dismiss()
            toast.error("Unable to find city");
            setError({ error: "Error loading weather data about this city" })
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        searchByLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchCity, isMetric]);

    return [forecast, loading, error];
}
