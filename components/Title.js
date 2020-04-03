import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
    <>
        <h1>
            {text}
        </h1>
        <style jsx>{`
      h1{
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
      }
    `}</style>
    </>
);

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;
