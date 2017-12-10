import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CampusAddForm from './CampusAddForm';
import {deleteCampusFromServerA, postCampusToServerA} from '../store';
import {GridList, GridTile} from 'material-ui/GridList';
import {IconButton, Subheader} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 700,
    overflowY: 'auto'
  },
};

function CampusAll(props) {
  let {campuses, students, deleteCampus, location} = props;
  return (
    <div> {location &&
      <CampusAddForm label={'+ CAMPUS'} postOrUpdateCampusA={postCampusToServerA} />
    }
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          <Subheader>Campuses</Subheader>
          {campuses.map(campus => {
          let studentLength = students.filter(student => Number(student.campusId) === campus.id).length;
            return (
              <GridTile
                key={campus.id}
                title={campus.name}
                actionIcon={
                  <IconButton disabled = {!!studentLength} onClick={() => deleteCampus(campus)}>
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

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    students: state.students,
    location: ownProps.location
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAll);
