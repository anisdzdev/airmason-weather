import {useState, useEffect, ChangeEventHandler} from 'react';

export const useIsMetric = () : [boolean, ChangeEventHandler<HTMLInputElement>|any] => {
    const [isMetric, setIsMetric] = useState<boolean>(true)

    const unitModeFlip = () => {
        setIsMetric(!isMetric);
        localStorage.setItem('isMetric', (!isMetric).toString());
    }

    useEffect(() => {
        const storedIsMetric = localStorage.getItem('isMetric');
        setIsMetric(storedIsMetric === null || storedIsMetric === 'true');
    }, []);

    return [isMetric, unitModeFlip];

}