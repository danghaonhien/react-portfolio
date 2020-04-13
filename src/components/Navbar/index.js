import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <div>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          color='inherit'
        >
          <MenuIcon />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/'>
              <h3> Home</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Architecture'>
              <h3> Architecture Portfolio</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Code'>
              <h3>Coding Portfolio</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Architecture'>
              <h3> About</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link to='/Architecture'>
              <h3> Contact</h3>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
