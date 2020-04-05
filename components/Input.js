import React from 'react';

const Input = ({type, classInput, classLabel, id, name, text, onChange, element}) => (
    <>
        <input type={type} className={classInput} id={id} name={name} onClick={() => onChange(element)} />
        <label className={classLabel} htmlFor={id}>{text}</label>
    </>
);

export default Input;
