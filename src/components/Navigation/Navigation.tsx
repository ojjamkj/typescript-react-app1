import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type MenuItem = { menuId: string; menuName: string; menuUrl: string; order:number };

export default function Navigation(props:any){
  
  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    const datas = getMenus(props.token);
    
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  const getMenus = async (credentials:object) => {
    const menuData = await getMenu(credentials);
    console.log('fetch data', menuData);

    setMenus(menuData);
  }
  
  return (
    <ul>
      { menus.map((menu)=> createMenu(menu)) }
    </ul>
  );
  
}

async function getMenu(credentials:object)  {
  let menuItems : MenuItem[] = [];
  try {
      const res = await axios.post('/menus', credentials);
      // console.log(res.data)
      const menus = res.data.menus;
      
      menus.map((currentValue : object, index: number)=>{
        const data = currentValue as MenuItem;
        menuItems.push(data);
      })

      // console.log(menuItems);
  }
  catch (error) {
    console.log(error);
  }

  return menuItems;
}


function createMenu(menuItem : MenuItem)
{
  return (
    <li key={menuItem.menuId}>
      <Link to={menuItem.menuUrl}><button>{menuItem.menuName}</button></Link>
    </li>
  )
}

