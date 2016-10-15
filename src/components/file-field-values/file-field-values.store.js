import { EventEmitter } from 'events';
import dispatcher from '../app.dispatcher';
import axios from 'axios';
const FILES_URL = process.env.FILES_URL || 'https://gds-ms.firebaseio.com/config-files';
import { ON_CHANGE, SAVE_FIELD_VALUE, GET_FIELD_VALUE } from './action/types';
class FileFieldValuesStore extends EventEmitter {
    constructor() {
        super();
    }
    getFieldValue(fileId, fieldId, callback) {
        axios.get(FILES_URL + '/' + fieldId + '/' + fieldId + '/.json')
            .then((response) => {
                callback(undefined, JSON.stringify(response.data));
            })
            .catch((err) => {
                callback(err);
            });
    }
    saveFieldValue(fileId, fieldId, fieldValue, callback) {
        this.emit(ON_CHANGE);
    }
    handler(action) {
        switch (action.type) {
            case SAVE_FIELD_VALUE:
                this.saveFieldValue(action.fileId, action.fieldId, action.fieldValue, action.callback);
                break;
            case GET_FIELD_VALUE:
                this.getFieldValue(action.fileId, action.fieldId, action.callback);
                break;
        }
    }
}

const fileFieldValuesStore = new FileFieldValuesStore;
dispatcher.register(fileFieldValuesStore.handler.bind(fileFieldValuesStore));
export default fileFieldValuesStore;