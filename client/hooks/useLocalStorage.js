import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSer = localStorage.getItem(key);
        if (persistedStateSer) {
            const persistedState = JSON.parse(persistedStateSer);

            return persistedState
        }
        return initialValue;
    });


    const setLocaleStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value))
    };

    return [
        state,
        setLocaleStorageState
    ];

}