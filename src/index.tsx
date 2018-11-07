import { ActionsType, app, h } from "hyperapp"

(window as any).h = h

interface State {
  count: number,
}

const state: State = {
  count: 0
}

class Actions implements ActionsType<State, Actions> {
  down = value => state => ({ count: state.count - value })
  up = value => state => ({ count: state.count + value })
}

const actions = new Actions()

const view = (state: State, actions: Actions) => (
  <div center>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body)

document.title = "App Ready"
console.log("ok.")
