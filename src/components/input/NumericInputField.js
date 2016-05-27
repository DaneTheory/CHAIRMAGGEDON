import TextField  from 'material-ui/TextField'
import React, { PropTypes } from 'react'


const styles = {
  title: {
    cursor: 'pointer',
  },
  options: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  fixTop: {
    top: '8em',
    margin: 'auto 1em'
  }
};


const NumericInputField = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return ( <TextField
            style={styles.fixTop}
            type="number"
            placeholder={props.placeholder}
            hintText="Update Chair Count"
            floatingLabelText="Chair Count"
            onChange={handleChange}
          />
  );
};

NumericInputField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number
  ])
};

export default NumericInputField;
