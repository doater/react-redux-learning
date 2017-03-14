// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import store from 'STORE' 
// import routes from 'ROUTE'
import routes from 'ROUTE'

if(__DEV__){
    console.info('[当前环境] 开发环境')
}
// 根组件挂载点
const MOUNT_NODE=document.getElementById('app')

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history} children={routes}></Router>
//     </Provider>,
//     MOUNT_NODE
// )
// const App=React.createClass({
//     render(){
//         return (
//             <div>
//                 <h1>this is App</h1>
//             </div>
//         )
//     }
// })

// const Home=React.createClass({
//     render(){
//         return (
//             <div>
//                 <h2>this is Home</h2>
//             </div>
//         )
//     }
// })

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/">
//             <IndexRoute  component={Home}/>
//             <Route path="/repos" component={App}></Route>
//         </Route>
//     </Router>,
//     MOUNT_NODE
// )

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} children={routes}></Router>
    </Provider>,
    MOUNT_NODE
)