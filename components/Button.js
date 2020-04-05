import React from 'react';

const Button = ({classButton, id, text, onCancel, element}) => (
    <>
        <button className={classButton} id={id} onClick={() => onCancel(element)}>{text}</button>
    </>
);

export default Button;
