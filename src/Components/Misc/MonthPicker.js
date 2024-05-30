import React from "react";
import { useState } from "react";
import "../Style/Resources.module.css";

const MonthPicker = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const month = new Date().getMonth();

    const [currentMonth, setCurrentMonth] = useState(month);
    
    return (
        <>
       
        <select
        value={currentMonth}
        onChange={(e) => setCurrentMonth(e.target.value)}
        >
        value
        {months.map((month, index) => (
            <option key={index} value={index}>
            {month}
            </option>
        ))}
        </select>
        </>
       
    );
    };

export default MonthPicker;