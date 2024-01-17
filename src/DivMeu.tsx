import React from 'react';
import PropTypes from 'prop-types';

const DivMeu = ({ titulo, children }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>subtitulo</h2>
      {children}
    </div>
  );
};

DivMeu.propTypes = {
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DivMeu;
