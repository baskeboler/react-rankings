import React, {Component} from 'react';
import {Form, Panel, FormGroup, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap';
import FieldGroup from './utils/FieldGroup';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
class UserSettingsPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.user.score,
      credits: this.props.user.credits,
    };
    this.save=this.save.bind(this);
    this.onSliderChange=this.onSliderChange.bind(this);
    this.onAfterChange=this.onAfterChange.bind(this);
    this.onCreditsChange=this.onCreditsChange.bind(this);
    this.onAfterCreditsChange=this.onAfterCreditsChange.bind(this);
  }
  onSliderChange(value) {
  console.log(value);
  this.setState({score:  value,
  });
}
onAfterChange(value) {
  console.log(value);
}
  onCreditsChange(value) {
  console.log(value);
  this.setState({credits:  value,
  });
}
onAfterCreditsChange(value) {
  console.log(value);
}

save() {
  var u = this.props.user;
  u.score = this.state.score;
  u.credits=this.state.credits;
  this.props.onSave(u);
}
  render() {
    return (
      <Panel>
        <h3>{this.props.user.name}</h3>
      <Form>
        <FieldGroup
          id="nombre"
          label="Name"/>
        <FormGroup>
          <ControlLabel>Score</ControlLabel>
          <Slider value={this.state.score}
            min={0} max={10000}
            onChange={this.onSliderChange} onAfterChange={this.onAfterChange}/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Credits</ControlLabel>
          <Slider value={this.state.credits}
            min={0} max={1000}
            onChange={this.onCreditsChange} onAfterChange={this.onAfterCreditsChange}/>
        </FormGroup>
        <ButtonToolbar>
          <Button onClick={this.save}>Save</Button>
          <Button>Cancel</Button>
        </ButtonToolbar>
      </Form>
      </Panel>
    )
  }
}

export default UserSettingsPane;
