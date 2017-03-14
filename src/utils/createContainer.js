import {connect} from 'react-redux'

export default function createContainer(mapStateToProps, mapActionCreators, component) {
    const connectComponent = connect(mapStateToProps, mapActionCreators);
    return component?connectComponent(component):connectComponent;
}