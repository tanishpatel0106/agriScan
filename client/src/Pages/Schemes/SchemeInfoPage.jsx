import React from 'react';
import { useParams } from 'react-router-dom';
import {data} from './data'; // Local data file containing scheme information
import './Schemes.css'

const SchemeInfoPage = () => {
  const { id } = useParams();
  const scheme = data[id]
  if (!scheme) {
    return <div>No information found for the scheme.</div>;
  }
  return (
    <div>
      <h1 class="h">{scheme.name}</h1>
      <div style={{color:"#a52a2a"}} dangerouslySetInnerHTML={{ __html: scheme.desc }} />
    </div>
  );
};

export default SchemeInfoPage;
