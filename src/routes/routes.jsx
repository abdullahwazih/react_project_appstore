import React from 'react'

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Components/Root';
import Apps from '../Pages/Apps/Apps';
import installation from '../Pages/Installlation/installation';
import Banner from '../Pages/Root/Components/Banner';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Banner,
      },
      {
        path: 'apps',
        Component: Apps,
      },
      {
        path: 'installation',
        Component: installation,
      },

    ]
  },
]);