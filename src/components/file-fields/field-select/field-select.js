import React from 'react';
import AddFileField from '../actions/add-file-field';
export default class FieldSelect extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    selectField(e) {
        const selectedField = e.target.value;
        this.setState({
            selectedField
        });
        this.props.addField(selectedField);
    }
    render() {
        return (
            <div class="input-group">
                <select id="fieldSelectorId" class="input-group-field" onChange={this.selectField.bind(this)} value={this.state.selectedField}>
                    <option value="">Select field</option>
                    <option value="name">Name</option>
                    <option value="path">Path</option>
                    <option value="properties">Properties</option>
                </select>
            </div>
        );
    }
}