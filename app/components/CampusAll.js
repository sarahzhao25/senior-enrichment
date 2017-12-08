import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CampusAddForm from './CampusAddForm';
import {deleteCampusFromServerA} from '../store';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    cols: 3,
    width: 1000,
    height: 700,
    overflowY: 'auto'
  },
};

function CampusAll(props) {
  let campuses = props.campuses;
  let students = props.students;
  let deleteCampus = props.deleteCampus;
  return (
    <div>
      <CampusAddForm />
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>Campuses</Subheader>
      {campuses.map(campus => {
        let studentLength = students.filter(student => student.campusId == campus.id).length;
        return (
          <GridTile
            key={campus.id}
            title={campus.name}
            actionIcon={
              <IconButton disabled = {studentLength > 0} onClick={() => deleteCampus(campus)}>
                  <StarBorder color="white" />
              </IconButton>
            }
          >
          <Link to={`/campuses/${campus.id}`}><img src={campus.imageUrl} /></Link>
          </GridTile>
        )})}
      </GridList>
    </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAll);
