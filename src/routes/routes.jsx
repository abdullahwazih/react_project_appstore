import React from 'react'

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Components/Root';
import Apps from '../Pages/Apps/Apps';
import installation from '../Pages/Installlation/installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,    
    children: [
      {
        path: 'apps',
        Component: Apps,
      },
      {
        path: 'installation',
        Component: installation,
      }
    ]
  },
]);