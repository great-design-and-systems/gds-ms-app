import React from 'react';
import AddFileField from '../actions/add-file-field';
import lodash from 'lodash';

export default class FieldSelect extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillUpdate(nextProps) {
        if (!lodash.isEqual(nextProps.fields, this.props.fields)) {
            let omittedProps = {};
            lodash.forIn(this.props.fields, field => {
                lodash.set(omittedProps, field.value, false);
            });
            lodash.forIn(nextProps.fields, field => {
                lodash.set(omittedProps, field.value, true);
            });
            this.setState(omittedProps);
        }
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
                    <option disabled={!!this.state.name} value="name">Name</option>
                    <option disabled={!!this.state.path} value="path">Path</option>
                    <option disabled={!!this.state.properties} value="properties">Properties</option>
                    <option disabled={!!this.state.files} value="files">Files</option>
                    <option disabled={!!this.state.containers} value="containers">Containers</option>
                </select>
            </div>
        );
    }
}