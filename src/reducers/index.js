const events = (state = [], action) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = {title: action.title, body: action.body};
            const length = state.length;
            let id = length === 0 ? 1 : state[length].id + 1;
            return [...state, {id: id, ...event}];
        case 'CREATE_DELETE':
            return state;
        case 'CREATE_DELETE_ALL':
            return [];
        default: return state;
    }
}

export default events