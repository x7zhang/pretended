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
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              value={this.state.age}
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
              id="outlined-select-currency-native"
              select
              //label="Native select"
              className={classes.textField}
              value={this.state.currency}
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
              {currencies.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value="Cat in the Hat"
          //onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Placeholder"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Placeholder"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Placeholder"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel 
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
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