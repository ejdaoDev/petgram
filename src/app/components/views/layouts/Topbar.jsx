import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
//import MailIcon from '@mui/icons-material/Mail';
import PagesIcon from '@mui/icons-material/Pages';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from 'reactstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import AuthGuard from '../../../guards/Auth.guard'
//import Swal from 'sweetalert2';
//import history from '../../../services/History';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Topbar() {
  const [dropdownOne, setDropdownOne] = useState(false);
  const OpenCloseDropdownOne = () => {
    setDropdownOne(!dropdownOne)
  }

  const [dropdownTwo, setDropdownTwo] = useState(false);
  const OpenCloseDropdownTwo = () => {
    setDropdownTwo(!dropdownTwo)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logout = () => {
    if (window.confirm("Do you really want to leave?")) {
      AuthGuard.logout(() => { localStorage.clear() })
        //history.push("/");
        window.location.href = "#/";
    }
   /* Swal.fire({
      title: 'Do you wanna logout?',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: 'Logout',
      cancelButtonText: `Cancel`,
    }).then((result) => {
      if (result.isDenied) {
        AuthGuard.logout(() => { localStorage.clear() })
        //history.push("/");
        window.location.href = "#/session/signin";
      }
    })*/
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Link to="/" style={{ textDecoration: "none", color: "black" }}><PagesIcon />{' '}Go To Index</Link></MenuItem>
      {/*<MenuItem onClick={handleMenuClose}>Action 5</MenuItem>*/}
      <MenuItem onClick={logout}><LogoutIcon />{' '}Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*<MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>*/}
      {/*<MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificaciones</p>
      </MenuItem>*/}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  );

  return (

    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
      </Typography>

      <Link to="/home"><Button variant="outlined" color="transparent" style={{ marginRight: "5px" }}><HomeIcon /></Button></Link>

      {/*<Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>*/}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

        {/*<Dropdown isOpen={dropdownOne} toggle={OpenCloseDropdownOne}>
          <DropdownToggle className="btn-dropdown-header">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => OpenAlert()}>Action 1</DropdownItem>
            <DropdownItem>Action 2</DropdownItem>
            <DropdownItem>Action 3</DropdownItem>
          </DropdownMenu>
  </Dropdown>*/}

        <Dropdown isOpen={dropdownTwo} toggle={OpenCloseDropdownTwo}>
          <DropdownToggle className="btn-dropdown-header">
            <AccountCircle />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link to="/" style={{ textDecoration: "none", color: "black" }}><PagesIcon />{' '}Go To Index</Link></DropdownItem>
            {/*<DropdownItem>Action 5</DropdownItem>*/}
            <MenuItem onClick={logout}><LogoutIcon />{' '}Logout</MenuItem>
          </DropdownMenu>
        </Dropdown>

      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Toolbar>
  );
}