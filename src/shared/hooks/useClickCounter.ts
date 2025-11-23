import { useRef } from 'react';

export const useClickCounter = () => {
    const counter = useRef<number>(0);

    const addClickCounter = () => {
        counter.current++;
        console.log(counter.current);
    };

    return addClickCounter;
};
