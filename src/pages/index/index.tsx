import React from 'react';

import ChartList from './components/ChartList';
import ChartListV2 from './components/ChartListV2';


import './index.scss';


export default function Home() {
    return (
       <div className="my-homewok">
           <div className="my-homewok-content">
               {/* <ChartList/> */}
               <ChartListV2/>
            </div>
       </div>
    );
}
