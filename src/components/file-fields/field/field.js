import React from 'react';
import RemoveFileField from '../actions/remove-file-field';
import ReloadFileFields from '../actions/reload-file-fields';
export default class Field extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        this.setState({
            path: '#field/' + this.props.field.value + '/' + this.props.fileId + '/' + this.props.fieldId
        })
    }
    removeFileField() {
        new RemoveFileField(this.props.fileId, this.props.fieldId, err => {
            if (!err) {
                new ReloadFileFields(this.props.fileId);
            }
        });
    }
    render() {
        return (
            <li class="tabs-title"><a href={this.state.path} class="column large-9 medium-9 small-9 field">{this.props.field.value}</a><a onClick={this.removeFileField.bind(this)} class="column large-3 medium-3 small-3">remove</a></li>
        );
    } s
}