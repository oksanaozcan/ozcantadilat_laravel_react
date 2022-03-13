import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { House, CardList, FileCode } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const MyProSidebar = () => {
  return(
    <ProSidebar breakPoint={"sm"} width={'12rem'}>
      <SidebarHeader>
        <h4 className='text-center p-1'>Admin Panel</h4>
        <h6 className='text-center p-1'>[  Ozcan | WebDev  ]</h6>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<House />} active prefix={'active'}>
            <NavLink to='/admin'>Dashboard</NavLink>
          </MenuItem>
          <SubMenu title="Components" icon={<CardList />}>
            <MenuItem>
              <NavLink to='images'>Images</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='posts'>Posts</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='users'>Users</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='comments'>Comments</NavLink>
            </MenuItem>        
          </SubMenu>
          <MenuItem icon={<House />}>
            <NavLink to='/admin'>Categories</NavLink>
          </MenuItem>
          <MenuItem icon={<House />}>
            <NavLink to='/admin'>Tags</NavLink>
          </MenuItem>
        </Menu>   
      </SidebarContent>
      <SidebarFooter>
        footer    
      </SidebarFooter>
    </ProSidebar>
  )
}

export default MyProSidebar;