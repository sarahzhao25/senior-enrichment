import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RaisedButton, TextField} from 'material-ui';

class CampusAddForm extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      campusPicture: '',
      campusDescription: '',
      clickedbutton: false,
      isDirty: false
    };
    this.campusNameChangeHandler = this.campusNameChangeHandler.bind(this);
    this.campusPictureChangeHandler = this.campusPictureChangeHandler.bind(this);
    this.campusDescriptionChangeHandler = this.campusDescriptionChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  campusNameChangeHandler(event) {
    this.setState({campusName: event.target.value, isDirty: true})
  }

  campusPictureChangeHandler(event) {
    this.setState({campusPicture: event.target.value, isDirty: true})
  }

  campusDescriptionChangeHandler(event) {
    this.setState({campusDescription: event.target.value, isDirty: true})
  }

  clickHandler() {
    this.setState({clickedbutton: !this.state.clickedbutton})
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.postOrUpdateCampus({ name: this.state.campusName || undefined, imageUrl: this.state.campusUrl || undefined, description: this.state.campusDescription || undefined }, this.props.campusId);
    this.setState({campusName: '', campusPicture: '', campusDescription: '', isDirty: false});
  }

  render() {
    return (
      <div style={{display: 'inline'}}>
      <RaisedButton onClick={this.clickHandler} label={this.props.label} default={true} style={{margin: 12}} />
      {this.state.clickedbutton ?
        (
        <div>
          <form id="new-campus-form" onSubmit={this.submitHandler}>
            <div>
              <TextField
                value={this.state.campusName}
                onChange={this.campusNameChangeHandler}
                type="text"
                floatingLabelText={this.props.campus && this.props.campus.name}
                hintText="Name" />
                <br />
              <TextField
                value={this.state.campusPicture}
                onChange={this.campusPictureChangeHandler}
                type="url"
                floatingLabelText={this.props.campus && this.props.campus.imageUrl}
                hintText="Image URL" />
                <br />
              <TextField
                value={this.state.campusDescription}
                onChange={this.campusDescriptionChangeHandler}
                multiLine={true}
                rows={2}
                rowsMax={4}
                hintText="Description"
                floatingLabelText={this.props.campus && this.props.campus.description.slice(0, 23) + '...'} />
                <br />
              <span>
                <RaisedButton type="submit" label="SUBMIT" disabled={!this.state.campusName.length && !this.state.isDirty} secondary={true} style={{margin: 12}} />
              </span>
            </div>
          </form>
        </div>) : null
      }
  </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    label: ownProps.label,
    campusId: ownProps.campusId,
    campus: ownProps.campus
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    postOrUpdateCampus: function(body) {dispatch(ownProps.postOrUpdateCampusA(body, ownProps.campusId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAddForm);
