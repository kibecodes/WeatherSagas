import React, { useState } from 'react';
import { Searchbar } from "react-native-paper";


export const SearchBar = ({ setQuery }) => {
    const [query, setLocalQuery] = useState("");

    const handleQuery = () => {
        if(query !== "") {
            setQuery(query);
        } else {
            throw new Error("Error !!")
        }
    };

    return (
        <>
            <Searchbar
                placeholder="Search City"
                onSubmitEditing={handleQuery}
                value={query}
                onChangeText={setLocalQuery}
            />
        </>
    )
}