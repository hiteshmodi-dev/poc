import { useState, useEffect } from "react";

export const LifeCycleFunction = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or updated");

        return () => {
            console.log("Component unmounted or cleaned up");
        };
    }, [count]); // Dependency array: effect runs when count changes
    
    return (
        <div>
            <h1>Life Cycle Function</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
 }