import React, { useState } from "react";

const Arr = () => {
    const [newArr, setNewArr] = useState ([])

    const arr1 = [
        {date: '2000-01-30', value: '123456789'},
        {date: '2000-02-15', value: '123456789'},
    ]

    function formate () {
        let day = arr1.date.slice(8)
        let month = arr1.date.slice(5, 7)
        let newDate = day + '.' + month 
        setNewArr(arr1.map(date => newDate, value => newValue))
}

    formate ()
    return (
        <>
        <p>{arr1.date}</p>
        <p>{arr1.value}</p>
        <p>{newArr.date}</p>
        <p>{newArr.value}</p>
        </>
    )
}

export default Arr