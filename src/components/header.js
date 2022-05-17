import logo from '../logo.svg';
import React from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Menu } from 'antd';
import {
  Link,
} from "react-router-dom";

const { Header } = Layout;

// class Logo extends React.Component {
//   render(){
//     return (
//       <img src={logo} className="App-logo" alt="logo" />
//     )
//   }
// }

const menuItems = [
  {
    id: 'about',
    link: '/',
    name: 'React',
    icon: <img src={logo} className="App-logo" alt="logo" />,
  },
  {
    id: 'components',
    link: '/components',
    name: 'Components'
  },
  {
    id: 'props',
    link: '/props',
    name: 'Props'
  },
  {
    id: 'state',
    link: '/state',
    name: 'State'
  },
  {
    id: 'lifecycle',
    link: '/lifecycle',
    name: 'Lifecycle'
  }, {
    id: 'events',
    link: '/events',
    name: 'Events'
  },
  {
    id: 'keys',
    link: '/keys',
    name: 'Keys'
  },
  {
    id: 'refs',
    link: '/refs',
    name: 'Refs'
  },
  {
    id: 'async',
    link: '/async',
    name: 'Async'
  },
  {
    id: 'dom',
    link: '/dom',
    name: 'Virtual DOM'
  },
  {
    id: 'fragment',
    link: '/fragment',
    name: 'React.Fragment'
  },
  {
    id: 'memo',
    link: '/memo',
    name: 'React.Memo'
  },
  {
    id: 'useeffect',
    link: '/useeffect',
    name: 'useEffect'
  },
  {
    id: 'router',
    link: '/router',
    name: 'Router'
  },
  {
    id: 'context',
    link: '/context',
    name: 'Context'
  },
  {
    id: 'form',
    link: '/form',
    name: 'Work with form'
  }
];

function CustomHeader({ corentLink, ...props }) {
  const correntLink = document.location.pathname.slice(1);
  const menuItem = menuItems.map((menu) =>
    <Menu.Item key={menu.id} icon={menu.icon}>
      <Link to={menu.link}>{menu.name}</Link>
    </Menu.Item>
  )

  return (
    <Header className="custom-Header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[correntLink]}>
        {menuItem}
      </Menu>
    </Header>
  )
}

export default () => <CustomHeader />;