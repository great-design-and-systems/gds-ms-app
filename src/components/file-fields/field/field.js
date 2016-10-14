import React from 'react';
import RemoveFileField from '../actions/remove-file-field';
import ReloadFileFields from '../actions/reload-file-fields';
import { Link } from 'react-router';
export default class Field extends React.Component {
    constructor() {
        super();
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
            <li class="tabs-title"><Link to={'path/${this.props.field.value}/${this.props.fileId}/${this.props.fieldId}'} class="column large-9 medium-9 small-9 field">{this.props.field.value}</Link><a onClick={this.removeFileField.bind(this)} class="column large-3 medium-3 small-3">remove</a></li>
        );
    }
}