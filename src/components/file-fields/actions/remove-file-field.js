import { REMOVE_FILE_FIELD } from './types';
import dispatcher from '../../app.dispatcher';
export default function AddFileField(fileId, fieldId, callback) {
    dispatcher.dispatch({
        type: REMOVE_FILE_FIELD,
        fileId: fileId,
        fieldId: fieldId,
        callback: callback
    });
}