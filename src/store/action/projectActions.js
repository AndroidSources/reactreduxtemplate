import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const createProject = (project) => {
    //we are going to call this action from the Component
    //normall we return an object if we are not using thunk
    //thunk lets your return a function. Halts your dispatch during the async process is happening
    //Below is how it looks
    // return{
    //     type:"ADD_PROJECT",
    //     project:project
    // }

    //Thunk lets you return a function
    //@dispatch - this is the parameter that lets you dispatch an action to reducer
    //@getState let you access the data from the store
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //do async call to the server here and then call dispatch which you halted

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            //this is what we dispatch and handle it in reducer
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
        }).catch(err => {
            //this is what we dispatch and handle it in reducer
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }
};