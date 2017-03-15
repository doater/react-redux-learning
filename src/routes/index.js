export default {
    path: '/',
    component: require('COMPONENT/App').default,
    indexRoute:{
        component:require('COMPONENT/Welcome').default
    },
    childRoutes:[
        require('./msg').default,
        {path:'redirect',component:require('COMPONENT/Redirect').default},
        {path:'*',component:require('COMPONENT/404').default}
    ]
}