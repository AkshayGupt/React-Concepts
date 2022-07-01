# useContext hook

## About


* This hook is used to prevent the problem of passing state from parent to nested components through intermediate components.

* A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

## Getting Started
* Clone the repo on your system.
* Execute npm install to install the required dependencies.
* Run "npm start" to start the application.

## How to read?
1. Go through the general code flow.Can start with App.js.
2. Understand the PlaylistContext.js where the createContext is used.
3. Open the Home.js to see how it uses the state.

## Contribute
You are welcome to improve the content with more helpful examples or new concepts. If you are interested, you can create a pull request with the updates.

## References
* https://blog.webdevsimplified.com/2020-06/use-context/
* https://reactjs.org/docs/hooks-reference.html#usecontext
