import { useCallback } from 'react';

function Search() {
    // Fetch data asynchronously
    async function handleChange(query) {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=100`)
            const response = await res.json();
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Debounce function
    function debounce(func, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer); // Clear the timeout
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    // Use useCallback to ensure the function is not recreated on every render
    const debouncedHandleChange = useCallback(debounce(handleChange, 300), []);

    return (
        <>
            <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => debouncedHandleChange(e.target.value)} // Pass input value to debounced function
            />
        </>
    );
}

export default Search;
