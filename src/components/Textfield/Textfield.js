import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
 
});


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const sizeList = [
  
  {
    value: 'TIB',
    label: 'TB',
  },

  {
    value: 'GIB',
    label: 'GB',
  },

  {
    value: 'MIB',
    label: 'MB',
  }
];

const selectorSizeList = [
  {
    value: '478',
    label: '478',
  },
  
  {
    value: '225',
    label: '225',
  },

  {
    value: '126',
    label: '126',
  },
];


const flagList = [
  {
    value: 'excutive 1',
    label: 'EXT 1',
  },
  {
    value: 'excutive 2',
    label: 'EXT 2',
  },
];

const assignList = [
  {
    value: 'Yes',
    label: '----Yes----',
  },

  {
    value: 'No',
    label: '----No----',
  }
];

 

class LEMSCreator extends React.Component {
  constructor(props) {
    super(props);

    let LEMSTableStatus = this.props.openLEMSTable;
    this.LEMSTableHandle = this.props.handleTableStatus;
    console.log("LEMSTableStatus", LEMSTableStatus);

    this.state = {
      open: LEMSTableStatus,
      age: '',
    };
  }

  componentWillMount(props) {
    console.log("componentDidMount props", props);
  }

  handleChange = name => event => {
    this.setState({[name]: Number(event.target.value)});
  }; 

  handleClose = () => {
    this.setState({open: false});
    this.LEMSTableHandle(false);
    console.log("this.LEMSTableHandle", this.LEMSTableHandle);
  };

  render() {
    const { classes, openLEMSTable } = this.props;
    console.log("open status", this.state.open);

    return (
      
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">CREATE LEMS</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>


            <TextField
              id="outlined-number"
              label="LEMS NAME"
              //value="LEMS NAME"
              onChange={this.handleChange('age')}
              //type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />

       
            <TextField
              id="outlined-number"
              label="QUANTITY"
              value="LEMS QUANTITY"
              onChange={this.handleChange('age')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-number"
              label="SIZE"
              value="SIZE"
              onChange={this.handleChange('age')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              //variant="outlined"
            />
          
            <TextField
              id="size-selection"
              select
              //label="SIZE"
              className={classes.textField}
              value={this.state.currency}
              onChange={this.handleChange('currency')}
              fullWidth
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              //helperText="   pleasnse"
              margin="normal"
              //variant="outlined"
            >
              {sizeList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

          
            <TextField
              id="outlined-select-currency-native"
              select
              label="SELECTOR SIZE"
              className={classes.textField}
              value="SELECTOR SIZE"
              onChange={this.handleChange('currency')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              //helperText="Select"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            >
              {selectorSizeList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>


           
            <TextField
              id="outlined-select-currency-native"
              select
              label="FLAG"
              className={classes.textField}
              value="OPERATING SYSTEM FLAG"
              onChange={this.handleChange('currency')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
            >
              {flagList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

          
            <TextField
              id="outlined-select-currency-native"
              select
              label="AASIGN TO VM"
              className={classes.textField}
              value="ASSIGN TO VM"
              onChange={this.handleChange('currency')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
            >
              {assignList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel 
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      
      );
  }
}

LEMSCreator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LEMSCreator);