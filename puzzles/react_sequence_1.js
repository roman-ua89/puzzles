
//---------React------------

// import React, {useState, useEffect, useLayoutEffect} from 'react'
// import ReactDOM from 'react-dom'
//
// function App() {
//   console.log('App')
//
//   const [state, setState] = useState(0)
//
//   useEffect(() => {
//     setState((prev) => prev + 1)
//   }, [])
//
//   useEffect(() => {
//     console.log('useEffect 1')
//     return () => {
//       console.log('useEffect 1, cleanup')
//     }
//   }, [state])
//
//   useEffect(() => {
//     console.log('useEffect 2')
//     return () => {
//       console.log('useEffect 2, cleanup')
//     }
//   }, [state])
//
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect')
//     return () => {
//       console.log('useLayoutEffect cleanup')
//     }
//   }, [state])
//
//   return <div>hi</div>
// }
//
// ReactDOM.render(<App />, document.getElementById('root'))
