import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {data} from './data'; // Local data file containing scheme information
import './Schemes.css'

const SchemesInfo = () => {
  return (
    <div class="text">
      <h1>Government Schemes For Crop Diseases</h1>
      <ul class="sc">
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
