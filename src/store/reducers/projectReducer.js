const initState = {
    projects: [
        {id: '1', title: 'Gowtham is here', content: 'blah blah blah'},
        {id: '2', title: 'George is also here here!!!', content: 'blah blah blah'},
        {id: '3', title: 'Bullet sundar is also here here here !!!', content: 'blah blah blah'}
    ]
};

const projectReducer = (state = initState, action) => {

    switch (action.type) {

        case 'CREATE_PROJECT_SUCCESS':
            console.log('create project success');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error');
            return state;
        default:
            return state;
    }
};

export default projectReducer;