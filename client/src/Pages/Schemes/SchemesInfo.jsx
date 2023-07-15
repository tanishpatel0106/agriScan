import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {data} from './data'; // Local data file containing scheme information
import './Schemes.css'

const SchemesInfo = () => {
  return (
    <div>
      <h1>Government Schemes</h1>
      <ul>
        {data.map((scheme) => (
          <li key={scheme.id}>
            <Link to={`/scheme-info/${scheme.id}`}>{scheme.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchemesInfo;
