import {app, h} from 'hyperapp';

console.log(h);

const initState = {name: 'World'};

/*
const update = (state, msg) => {
    return state;
};
*/
const update = {};

const view = (state) =>
    <div>
        Hello {state.name} !
    </div>
;

app(initState, update, view, document.body);
