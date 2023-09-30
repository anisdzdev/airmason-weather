import {useState, useEffect} from 'react';

export const useFavorites = () : [string[], (city: string, immediate?: boolean) => void] => {
    const [favorites, setFavorites] = useState<string[]>([])
    let timeout: string | number | NodeJS.Timeout | undefined;

    const updateFavorites = (city: string, immediate = false) => {
        if (timeout && !immediate) {
            clearTimeout(timeout);
            timeout = undefined;
            return;
        }
        const newFavorites = [...favorites];
        const index = newFavorites.findIndex(f => f.toLowerCase() === city.toLowerCase());
        if (index > -1) {
            newFavorites.splice(index, 1);
        } else {
            newFavorites.push(city);
        }
        if (immediate) {
            clearTimeout(timeout);
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            timeout = undefined;
            return;
        }
        timeout = setTimeout(() => {
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            timeout = undefined;
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