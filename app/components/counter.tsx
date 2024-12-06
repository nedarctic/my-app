"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return(<div>
        <p onClick={() => setCount(count + 1)}>Clicked {count} times</p>
    </div>);
}