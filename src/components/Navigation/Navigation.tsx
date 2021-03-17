import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type MenuItem = { menuId: string; menuName: string; menuUrl: string; order:number };

export default function Navigation(){
    const menuData : MenuItem[] = [
      {
        menuId : 'home',
        menuName : 'home',
        menuUrl : '/home',
        order : 1
      },
      {
        menuId : 'preferences',
        menuName : 'preferences',
        menuUrl : '/preferences',
        order : 2
      },
      {
        menuId : 'dashboard',
        menuName : 'dashboard',
        menuUrl : '/dashboard',
        order : 3
      }
    ]
    return(
        <ul>
          {menuData.map(menu => createMenu(menu))}
        </ul>
    );

}


async function getMenu() {
  try {
    const response = await axios.get("http://example.com/posts/12345/");
    console.log(response);
  }
  catch (error) {
    console.log(error);
  }
}

function createMenu(menuItem : MenuItem)
{
  return (
    <li key={menuItem.menuId}>
      <Link to={menuItem.menuUrl}><button>{menuItem.menuName}</button></Link>
    </li>
  )
}

