Links: [[React]] 
Tags: #js #react 

<hr>

This hook allows us to share data between multiple levels of components without using [[React Properties]]

It is convenient to create context in different file and export it to the necessary component.
```jsx
// UserContext.jsx
import { createContext } from 'react'
export const UserContext = createContext('')
```

This is how Provider Component looks. (Component A) (*Assume that there is 4 total components which one is in another like: a => b => c => d*)
```jsx
// import createContext to create hook
import {useState, createContext} from 'react';
import Compb from './Compb'

// import hook to export data 
import { UserContext } from './UserContext.jsx'

function Compa() {

  const [user, setUser] = useState("nureddin")

  return (
    <div>Compa {user}
    <!-- Wrap inner components with following tag and apply context value to transfer data between components -->
    <UserContext.Provider value={user}>
     <Compb /> 
    </UserContext.Provider>
     </div>
  )
}

export default Compa
```


> [!IMPORTANT] Update
> In React 19, you can render `<Context>` as a provider instead of `<Context.Provider>`


This is how Consumer Component looks. (Component D)
```jsx
import { useContext } from 'react'
import { UserContext } from './UserContext.jsx'

function Compd() {

  const user = useContext(UserContext) 

  return (
    <div>Compd {user}</div>
  )
}

export default Compd
```

# Note:
Context reads the information from the component above itself. So, if you pass 
`value={level+1}`
to each component, they will increment the value of the level each time they go deeper in the subtree.

How context works might remind you of CSS property inheritance. In CSS, you can specify color: blue for a `<div>`, and any DOM node inside of it, no matter how deep, will inherit that color unless some other DOM node in the middle overrides it with color: green. Similarly, in React, the only way to override some context coming from above is to wrap children into a context provider with a different value.

**Different React contexts don’t override each other.** Each context that you make with `createContext()` is completely separate from other ones, and ties together components using and providing _that particular_ context. One component may use or provide many different contexts without a problem.

# Using context and [[useReducer Hook]] together
Let's say you have a component where you have to use a state. But this state must be changed by different components of the subtree. This is how you can create two context components to pass a state and a setter function to inner components. (From React docs)

```jsx
// TasksProvider.jsx
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
```

Unlike the regular way of exporting context, this time we export the wrapper itself with `children` object to populate it's subtree. This `TaskProvider` component creates state, uses state and setter functions in two contexts and returns a component whose children will be declared later. To use this provider:

```jsx
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>All tasks:</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
```

In the example above, innerHTML of the `TasksProvider` component will be the `children` object which is used in the `TasksProvider.jsx` file. 

### Reading state:
To make it easier to read state or use the setter function this logic can be implemented.
```jsx
export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
```

```jsx
const tasks = useTasks();
const dispatch = useTasksDispatch();
```
