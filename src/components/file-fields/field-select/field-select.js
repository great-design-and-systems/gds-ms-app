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
    }
    addField(e) {
        this.props.addField(this.state.selectedField);
    }
    render() {
        return (
            <div class="input-group">
                <select id="fieldSelectorId" class="input-group-field" onChange={this.selectField.bind(this) } value={this.state.selectedField}>
                    <option value="name">Name</option>
                    <option value="path">Path</option>
                    <option value="properties">Properties</option>
                </select>
                <div class="input-group-button">
                    <button onClick={this.addField.bind(this) } type="buttom" class="button">Add</button>
                </div>
            </div>
        );
    }
}