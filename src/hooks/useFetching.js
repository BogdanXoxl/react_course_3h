import {useState} from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (...params) => {
        try{
            setIsLoading(true);
            await callback(...params);
        }catch (e){
            setError(e.message);
        }finally {
            setIsLoading(false);
        }
    };

    return [fetchData, isLoading, error];
};