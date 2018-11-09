import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import LEMSCreator from "../../components/Textfield/Textfield";

const styles = theme => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  typography: {
    margin: theme.spacing.unit * 2,
  },

});

class Virtualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };

    this.tableHead = ["ID", "Name", "Country", "City", "Salary"];
    this.tableData = [
                      ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                      ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                      ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                      [
                        "4",
                        "Philip Chaney",
                        "$38,735",
                        "Korea, South",
                        "Overland Park"
                      ],
                      [
                        "5",
                        "Doris Greene",
                        "$63,542",
                        "Malawi",
                        "Feldkirchen in Kärnten"
                      ],
                      ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
                    ];


  };

  handleClick =  event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };



  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <GridContainer>
    
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="rose">
              <h4 className={classes.cardTitleWhite}>
                Table on Plain Background
              </h4>
              <Icon color="red" onClick={this.handleClick}>
                  add_circle
              </Icon>
              
              <p className={classes.cardCategoryWhite}>
              probably used in later
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="rose"
                dataLength = {30} 
                rowsPerPage = {5}
                page = {20}
                tableHead={this.tableHead}
                tableData={this.tableData}
              />
            </CardBody>
          </Card>
          <Popover
            id="simple-popper"
            open={open}
            anchorEl={anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
          <LEMSCreator />
          </Popover>
        </GridItem>
        
      </GridContainer>
    );
  }

}

Virtualization.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Virtualization)
