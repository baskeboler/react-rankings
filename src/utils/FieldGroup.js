import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FieldGroup extends Component {
  render() {
    var id = this.props.id,
    label = this.props.label,
    help=this.props.help,
    props=this.props;
    return (
      <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
}
export default FieldGroup;
