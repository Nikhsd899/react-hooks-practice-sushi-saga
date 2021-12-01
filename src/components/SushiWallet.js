import React, { useState } from "react";

function SushiWallet({ onAddMoney }) {
    const [value, setValue] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        onAddMoney(value);
        setValue(0);
    }

    function handleChage(event) {
        const value = parseInt(event.target.value, 10);
        setValue(value);
    }

    return (
        <form onSubmist={handleSubmit}>
            <input type="number" value={value} onChange={handleChange} />
            <button type="submit">Add $ to Budget</button>
        </form>
    );
}

export default SushiWallet;