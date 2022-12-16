import React from 'react'
import Card from '../component/Card';
import { data } from '../component/helper/data'

const Team = () => {
  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center' >
      {data.map((team) => {
         return <Card team={team} />;
      }
      )}
    </div>
  );
}

export default Team