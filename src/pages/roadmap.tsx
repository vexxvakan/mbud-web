import dynamic from 'next/dynamic';
import React, { Fragment } from 'react';

import Roadmap from '../components/sections/Roadmap'
import Whitepaper from '../components/sections/Whitepaper';


const RoadmapPage = () => (
  <Fragment>
      <Roadmap/>
      <Whitepaper/>
  </Fragment>
);

export default RoadmapPage;