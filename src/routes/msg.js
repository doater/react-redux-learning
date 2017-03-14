import createContainer from 'UTIL/createContainer'
import {injectReducer} from 'REDUCER'
const connectComponent = createContainer(
    ({userData,msg})=>({userData,msg}),
    require('ACTION/msg').default
)
export default {
    path: 'msg',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            // 立即注入Reducer
            injectReducer('msg',require('REDUCER/msg/').default)
            cb(null, require('VIEW/msg').default)
        }, 'msgView');
    },
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null,connectComponent(require('COMPONENT/Msg/MsgList').default))
            },'msgList')
        }
    }
}