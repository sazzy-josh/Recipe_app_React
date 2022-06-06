import ReactLoading from 'react-loading';
import React from 'react';


const Loader = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'50%'} width={'50%'} className="loader" />
);
 
export default Loader;