import React from 'react';

const ArraysComponent = () => {
    const getNumberArray1 = () => [1, 2, 4, 5, 6];
    const getStringArray1 = () => ['string1', 'string3'];

    const numberArray1 = getNumberArray1();
    const stringArray1 = getStringArray1();

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <h2>Arrays Information</h2>
            <p>Number Array: {JSON.stringify(numberArray1)}</p>
            <p>String Array: {JSON.stringify(stringArray1)}</p>
            <p>Index of '4' in Number Array: {fourIndex}</p>
            <p>Index of 'string3' in String Array: {string3Index}</p>
        </div>
    );
};

export default ArraysComponent;
