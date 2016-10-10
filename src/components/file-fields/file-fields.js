import React from 'React';
import FieldSelect from './field-select/field-select';
import FileFieldStore from './file-fields.store';
import {RELOAD_FILE_FIELDS} from './actions/types';
import GetFileFields from './actions/get-file-fields';
import lodash from 'lodash';
import Field from './field/field';
import AddFileField from './actions/add-file-field';
import ReloadFileFields from './actions/reload-file-fields';
export default class FileFields extends React.Component {
    constructor() {
        super();
    }
    getFileFields() {
        new GetFileFields(this.props.selectedFile, (err, data) => {
            if (!err) {
                this.setState({
                    fields: JSON.parse(data)
                });
            }
        });
    }
    componentWillMount() {
        this.setState({
            selectedField: '',
            fields: []
        });
        FileFieldStore.on(RELOAD_FILE_FIELDS, this.getFileFields);
        this.getFileFields();
    }
    componentWillUnMount() {
        FileFieldStore.removeListener(RELOAD_FILE_FIELDS, this.getFileFields);
    }
    selectField(selectedField) {
        this.state.selectedField = selectedField;
    }
    addField(field) {
        new AddFileField(this.props.selectedFile, field, (err) => {
            if (!err) {
                new ReloadFileFields();
            }
        });
    }
    render() {
        const fields = [];
        lodash.forIn(this.state.fields, (field, key) => {
            fields.push(<Field field={field} fieldId={key}/>)
        });
        return (
            <div class="large-4 medium-4 columns">
                <div>
                    <FieldSelect addField={this.addField.bind(this) } selectField={this.selectField.bind(this) }/>
                </div>
                <ul class="tabs vertical" id="field-tabs" data-tabs>
                    {fields}
                </ul>
            </div>);
    }
}