import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Components/Root';
import Apps from '../Pages/All_Apps/Apps';
import installation from '../Pages/Installlation/installation';
import Banner from '../Pages/Root/Components/Banner';
import AllApps from '../Pages/All_Apps/Apps';
import AppDetails from '../Pages/AppDetails/AppDetails';


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
        Component: AllApps,
      },
      {
        path: 'installation',
        Component: installation,
      },
      { path: 'app/:id', Component: AppDetails},


    ]
  },
]);