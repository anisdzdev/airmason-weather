import {useState, useEffect, ChangeEventHandler} from 'react';

export const useIsMetric = () : [boolean, ChangeEventHandler<HTMLInputElement>|any] => {
    const [isMetric, setIsMetric] = useState<boolean>(true)

    const unitModeFlip = () => {
        console.log(!isMetric)
        setIsMetric(!isMetric);
        localStorage.setItem('isMetric', (!isMetric).toString());
    }

    useEffect(() => {
        const storedIsMetric = localStorage.getItem('isMetric');
        setIsMetric(storedIsMetric === null || storedIsMetric === 'true');
    }, []);

    useEffect(() => {
        console.log(isMetric)
    }, [isMetric]);

    return [isMetric, unitModeFlip];

}