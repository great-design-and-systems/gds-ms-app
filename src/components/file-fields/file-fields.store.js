import { EventEmitter } from 'events';
import Dispatcher from '../app.dispatcher';
import axios from 'axios';
import { GET_FILE_FIELDS, ADD_FILE_FIELD, RELOAD_FILE_FIELDS, REMOVE_FILE_FIELD } from './actions/types';
const FILE_FIELDS_URL = process.env.FILE_FIELDS_URL || 'https://gds-ms.firebaseio.com/config-files';
class FileFieldStore extends EventEmitter {
    constructor() {
        super();
    }
    getFileFields(fileId, callback) {
        axios.get(FILE_FIELDS_URL + '/' + fileId + '/props.json')
            .then((response) => {
                callback(undefined, JSON.stringify(response.data));
            })
            .catch((err) => {
                callback(err);
            });
    }
    addField(fileId, field, callback) {
        axios.post(FILE_FIELDS_URL + '/' + fileId + '/props/.json', { value: field })
            .then((response) => {
                callback(undefined);
            })
            .catch((err) => {
                callback(err);
            });
    }
    reloadFileFields(fileId) {
        axios.get(FILE_FIELDS_URL + '/' + fileId + '/props.json')
            .then((response) => {
                this.emit(RELOAD_FILE_FIELDS, JSON.stringify(response.data));
            })
            .catch((err) => {
                console.log('reloadFileFields', err);
            });
    }
    removeFileField(fileId, fieldId, callback) {
        axios.delete(FILE_FIELDS_URL + '/' + fileId + '/props/' + fieldId + '/.json')
            .then((response) => {
                callback(undefined);
            })
            .catch((err) => {
                callback(err);
            });
    }
    handler(action) {
        switch (action.type) {
            case GET_FILE_FIELDS:
                this.getFileFields(action.id, action.callback);
                break;
            case ADD_FILE_FIELD:
                this.addField(action.id, action.field, action.callback);
                break;
            case RELOAD_FILE_FIELDS:
                this.reloadFileFields(action.id);
                break;
            case REMOVE_FILE_FIELD:
                this.removeFileField(action.fileId, action.fieldId, action.callback);
                break;
        }
    }
}

const fileFieldStore = new FileFieldStore;
Dispatcher.register(fileFieldStore.handler.bind(fileFieldStore));

export default fileFieldStore;