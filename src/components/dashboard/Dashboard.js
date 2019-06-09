import React, {Component} from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //state is the parameter. We referred the name as project in root reducer
        //projects is the value
        // projects: state.project.projects

        //firestore connect returns this props which we can use it
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
};


//for using multiple higher order component we have to use compose
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)

//if there is one higher order function we use it this way
// export default connect(mapStateToProps)(Dashboard)