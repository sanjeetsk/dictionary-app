import React, { createContext, useContext, useState } from "react";

const WordContext = createContext();

export function WordProvider({ children }) {
    const [selectedWord, setSelectedWord] = useState('');

    const updatedWord = (text) =>{
        setSelectedWord(text);
    }

    return (
        <WordContext.Provider value={{ selectedWord, setSelectedWord, updatedWord }}>
            {children}
        </WordContext.Provider>
    );
}

export function useWordContext() {
    return useContext(WordContext);
}
