import {useState, useEffect, ChangeEventHandler} from 'react';

export const useIsCelsius = () : [boolean, ChangeEventHandler<HTMLInputElement>] => {
    const [isCelsius, setIsCelsius] = useState<boolean>(true)

    const unitModeFlip = () => {
        setIsCelsius(!isCelsius);
        localStorage.setItem('isCelsius', (!isCelsius).toString());
    }

    useEffect(() => {
        const storedIsCelsius = localStorage.getItem('isCelsius');
        setIsCelsius(storedIsCelsius === 'true');
    }, []);

    return [isCelsius, unitModeFlip];

}