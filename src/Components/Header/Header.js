import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Header() { 

    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return(
     <div>
         <header className="header-container">
         <a href="#">
             <div className="name-container">
               <h1 className="header-name">Collin Radichel</h1>
             </div>
             </a>
         <ul>
             <li>
                 <div className="icon-container">
                     <a href="https://www.linkedin.com/in/collin-radichel/">
                     <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     </a>
                 </div>
             </li>
         </ul>
         </header>
     </div>
    )
}