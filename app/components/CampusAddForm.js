import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCampusToServerA} from '../store';

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
    this.props.postCampus({ name: this.state.campusName, imageUrl: this.state.campusUrl, description: this.state.campusDescription });
    this.setState({campusName: '', campusPicture: '', campusDescription: '', isDirty: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>+ ADD NEW CAMPUS</button>
      {this.state.clickedbutton ?
        (
        <div>
          <h3>Really, try me a NEW CAMPUS?</h3>
          <form id="new-campus-form" onSubmit={this.submitHandler}>
            <div>
              <label>Campus Name: </label>
              <input
                value={this.state.campusName}
                onChange={this.campusNameChangeHandler}
                type="text"
                placeholder="Caaaaampus Name?" />
              <label>Campus Link: </label>
              <input
                value={this.state.campusPicture}
                onChange={this.campusPictureChangeHandler}
                type="url"
                placeholder="Caaaaampus Picture?" />
              <label>Campus Description: </label>
              <textarea
                value={this.state.campusDescription}
                onChange={this.campusDescriptionChangeHandler}
                rows="3"
                cols="50"
                placeholder="Caaaaampus Description?"></textarea>
              <span>
                <button type="submit" disabled={!this.state.campusName.length && this.state.isDirty}>Submit!</button>
              </span>
            </div>
          </form>
        </div>) : (<div />)
      }
  </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postCampus: function(info) {dispatch(postCampusToServerA(info))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAddForm);
