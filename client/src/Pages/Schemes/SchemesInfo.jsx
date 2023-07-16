import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {data} from './data'; // Local data file containing scheme information
import './Schemes.css'
import ipm from './ipm.jpg'

const SchemesInfo = () => {
  return (
    <table><tr><td>
    <div className="text">
      <h1>Government Schemes For Crop Diseases</h1>
      <ul className="sc">
        {data.map((scheme) => (
          <li key={scheme.id}>
            <Link to={`/scheme-info/${scheme.id}`} className='scheme-link'>{scheme.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </td>
    <td>
        <div className = "image">
          <img src ={ipm} alt = "My image" width="500" height = "400" />
        </div>
    </td>
</tr>
</table>

  );
};

export default SchemesInfo;
