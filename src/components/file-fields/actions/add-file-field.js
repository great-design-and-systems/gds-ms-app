import {ADD_FILE_FIELD} from './types';
import dispatcher from '../../app.dispatcher';
export default function AddFileField(fileId, field, callback) {
    dispatcher.dispatch({
        type: ADD_FILE_FIELD,
        id: fileId,
        field: field,
        callback: callback
    });
}