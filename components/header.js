
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link } from '../routes.js'

export default()=>{
    return (
      <Menu style={{ marginTop: '10px'}}>
           <Link route='/'>
            <a className="item">Logo</a>
           </Link>


        <Menu.Menu position='right'>
        <Link route='/'>
            <a className="item">Campaign</a>
           </Link>
          <Link route='/campaign/createcomtract'>
            <a className="item">+
               </a>
           </Link>
          


        </Menu.Menu>
      </Menu>
    )
  }
