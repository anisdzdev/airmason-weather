import {useState, useEffect} from 'react';

export const useFavorites = () : [string[], (city: string) => void] => {
    const [favorites, setFavorites] = useState<string[]>([])
    let timeout: string | number | NodeJS.Timeout | undefined;

    const updateFavorites = (city: string) => {
        if(timeout) clearTimeout(timeout);
        const newFavorites = [...favorites];
        const index = newFavorites.indexOf(city)
        if (index > -1) {
            newFavorites.splice(index, 1);
        } else {
            newFavorites.push(city);
        }
        timeout = setTimeout(() => {
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }, 1500);
    }

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return [favorites, updateFavorites];

}