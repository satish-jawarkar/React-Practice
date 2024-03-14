import React, { useState } from 'react';
import './PuzzleForm.css';

function PuzzleForm({ onSubmit }) {
    const [values, setValues] = useState(Array(9).fill(''));

    const handleChange = (index, e) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        {values.map((value, index) => (
                            <td key={index}>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PuzzleForm;
