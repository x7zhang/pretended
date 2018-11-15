import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Collapse from '@material-ui/core/Collapse';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submenuOpen : false,
    };
    this.activeRoute = this.activeRoute.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  activeRoute = (pathname, routeName) => {
    return pathname.indexOf(routeName) > -1 ? true : false;
  }

  handleClick = () => {
    let submenuOpen = this.state.submenuOpen;
    this.setState({
      submenuOpen: !submenuOpen
    })
  }

  render() {
    const { classes, color, logo, image, logoText, routes } = this.props;
    const { submenuOpen } = this.state;
    var links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) return null;
          var activePro = " ";
          var listItemClasses;
          if (prop.path === "/upgrade-to-pro") {
            activePro = classes.activePro + " ";
            listItemClasses = classNames({
              [" " + classes[color]]: true
            });
          } else {
            listItemClasses = classNames({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });
          }
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: this.activeRoute(prop.path)
          });
          return (
            <NavLink
              to={prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
            {prop.subComponent  ? 

              (<div>
               <ListItem button className={classes.itemLink + listItemClasses} onClick={this.handleClick}>
                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <prop.icon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                >
                {submenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemText>
              </ListItem>
              <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                {prop.subComponent.map((ele, key) => {
                  return (
                     <NavLink
                        to={ele.path}
                        className={activePro + classes.item}
                        activeClassName="active"
                        key={key}
                      >
                      <ListItem button className={classes.itemLink + listItemClasses} >
                        <ListItemText
                          primary={ele.sidebarName}
                          className={classes.nestMenu + whiteFontClasses }
                          disableTypography={true}
                        />
                      </ListItem>
                    </NavLink>
                    );
                  })}
                </List>
              </Collapse>
              </div>
               ) : 
              (
              <ListItem button className={classes.itemLink + listItemClasses}>
                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <prop.icon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
              </ListItem>
              )


            }
              
            </NavLink>
          );
        })}
      </List>
    );
    var brand = (
      <div className={classes.logo}>
        <a href="https://www.creative-tim.com" className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} />
          </div>
          {logoText}
        </a>
      </div>
    );

    return (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              <HeaderLinks />
              {links}
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );

  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);


/*
const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  let open = false;
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  function handleClick() {
    console.log("submenu clicked...");
    open = !open;
    console.log("open status", open);
    return open;
  }



  const { classes, color, logo, image, logoText, routes } = props;
  console.log("sidebar props", props);
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) return null;
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path)
        });
        return (
          <NavLink
            to={prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
          {prop.sidebarName === "Virtualization" ? 

            (<div>
              <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
            </div>
             ) : 
            (
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <prop.icon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
            )


          }
            
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a href="https://www.creative-tim.com" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
*/