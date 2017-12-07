import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCampusToServerA} from '../store';

class CampusUpdateForm extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      campusPicture: '',
      campusDescription: '',
      isDirty: false
    };

    this.campusNameChangeHandler = this.campusNameChangeHandler.bind(this);
    this.campusPictureChangeHandler = this.campusPictureChangeHandler.bind(this);
    this.campusDescriptionChangeHandler = this.campusDescriptionChangeHandler.bind(this);
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
  submitHandler(event) {
    event.preventDefault();
    this.props.updateCampus({ name: this.state.campusName || this.props.campus.name, imageUrl: this.state.campusPicture || this.props.campus.imageUrl, description: this.state.campusDescription || this.props.campus.description }, this.props.campus.id);
    this.setState({campusName: '', campusPicture: '', campusDescription: '', isDirty: false});
  }

  render() {
    return (
      <div>
        <h3>UPDATE this Campus</h3>
        <form id="campus-update-form" onSubmit={this.submitHandler}>
          <div>
            <h4>New Campus Name?</h4>
            <h5>Original Name: {this.props.campus.name}</h5>
            <input
              value={this.state.campusName}
              onChange={this.campusNameChangeHandler}
              type="text"
              placeholder="Caaaaampus Name?" />
            <h4>New Campus imageUrl?</h4>
            <h5>Original imageUrl: {this.props.campus.imageUrl}</h5>
            <input
              value={this.state.campusPicture}
              onChange={this.campusPictureChangeHandler}
              type="url"
              placeholder="Caaaaampus Picture?" />
            <h4>New Campus Description?</h4>
            <h5>Original Description: {this.props.campus.description}</h5>
            <textarea
              value={this.state.campusDescription}
              onChange={this.campusDescriptionChangeHandler}
              rows="3"
              cols="50"
              placeholder="Caaaaampus Description?"></textarea>
            <span>
              <button type="submit">Submit!</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: ownProps.campuses,
    students: ownProps.students,
    campus: ownProps.campus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCampus: (updates, campusId) => dispatch(updateCampusToServerA(updates, campusId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusUpdateForm);

//this.props.campuses
//this.props.students
//this.props.campus

//the form is going to have options to update Name, imageUrl, Description
//the form will also have the potential to update Student's relation
