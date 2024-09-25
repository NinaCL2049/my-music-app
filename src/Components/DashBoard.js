import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SelectQuality from "./BasicSelect";
import SwitchOnline from "./Switch";
import VolumeSlider from "./VolumeSlider";
import Alert from "@mui/material/Alert";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      loggedIn: false,

      online: true,
      currentVolume: 20,
      currentQuality: 20,
    };
  }

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleSwitch = () => {
    this.setState((prevState) => ({ online: !prevState.online }));
  };

  handleSelect = (newQuality) => {
    this.setState({ currentQuality: newQuality });
  };

  handleSlider = (newVolume) => {
    this.setState({ currentVolume: newVolume });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setAnchorEl({ anchorEl: null });
  };

  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Music App
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SwitchOnline handleSwitch={this.handleSwitch} />
        <SelectQuality handleSelect={this.handleSelect} />
        <VolumeSlider handleSlider={this.handleSlider} />
        <h2>System notifications</h2>
        {!this.state.online && (
          <Alert severity="error"> 
          You are offline 
          </Alert>
        )}

        {this.state.currentQuality === 10 && (
          <Alert severity="info">
            Set quality to 'Normal' or 'High' for better sound
            </Alert>
          
        )}

        {this.state.currentVolume >= 80 && (
          <Alert severity="warning">
            Reduce volume or hearing damage may result
            </Alert>
        )}

      </Box>

    );
  }
}

export default DashBoard;
