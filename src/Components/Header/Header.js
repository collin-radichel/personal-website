import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Header() { 

    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return(
     <div>
         <header className="header">
         <a href="#">
             <div className="name-container">
               <h1 className="header-name">Collin Radichel</h1>
             </div>
             </a>
         <ul>
             <li>
                 <div className="icon-container">
                     <a>
                          <svg role="img">
                            <title>LinkedIn</title>
                          </svg>
                     </a>
                 </div>
             </li>
         </ul>
         </header>
     </div>
    )
}