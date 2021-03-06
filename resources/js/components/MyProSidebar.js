import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { House, FileCode, Image, CardText, People, ChatDots, Bookmark, Tag, ListColumns, PlusSquare } from 'react-bootstrap-icons';
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
          <MenuItem icon={<House />} active>
            <NavLink to='/admin'>Dashboard</NavLink>
          </MenuItem>
          <MenuItem icon={<Image />}>
            <NavLink to='images'>Images</NavLink>
          </MenuItem>
          <SubMenu title="Posts" icon={<CardText />}>
            <MenuItem icon={<ListColumns />}>
              <NavLink to='posts'>All</NavLink>
            </MenuItem>          
            <MenuItem icon={<PlusSquare />}>
              <NavLink to='posts/create'>Create New</NavLink>
            </MenuItem>                      
          </SubMenu>                
          <MenuItem icon={<Bookmark />}>
            <NavLink to='categories'>Categories</NavLink>
          </MenuItem>
          <MenuItem icon={<Tag />}>
            <NavLink to='tags'>Tags</NavLink>
          </MenuItem>
          <MenuItem icon={<ChatDots />}>
            <NavLink to='comments'>Comments</NavLink>
          </MenuItem>
          <MenuItem icon={<People />}>
            <NavLink to='users'>Users</NavLink>
          </MenuItem>          
          <SubMenu title="Components" icon={<FileCode />}>              
          </SubMenu>
        </Menu>   
      </SidebarContent>
      <SidebarFooter>
        footer    
      </SidebarFooter>
    </ProSidebar>
  )
}

export default MyProSidebar;