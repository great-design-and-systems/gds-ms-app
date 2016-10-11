import React from 'react';
import AddFileField from '../actions/add-file-field';
export default class FieldSelect extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.setState({
            selectedField: ''
        })
    }
    selectField(e) {
        const selectedField = e.target.value;
        this.setState({
            selectedField
        });
        this.setAddButtonEnabled(selectedField.length > 0);

    }
    setAddButtonEnabled(enabled) {
        const buttonElement = document.getElementById('addFieldButtonId');
        if (enabled) {
            buttonElement.removeAttribute('disabled');
        } else {
            buttonElement.setAttribute('disabled', '');
        }
    }
    addField(e) {
        this.props.addField(this.state.selectedField);
    }
    render() {
        return (
            <div class="input-group">
                <select id="fieldSelectorId" class="input-group-field" onChange={this.selectField.bind(this) } value={this.state.selectedField}>
                    <option value="">Select field</option>
                    <option value="name">Name</option>
                    <option value="path">Path</option>
                    <option value="properties">Properties</option>
                </select>
                <div class="input-group-button">
                    <button id="addFieldButtonId" disabled onClick={this.addField.bind(this) } type="button" class="button">Add</button>
                </div>
            </div>
        );
    }
}