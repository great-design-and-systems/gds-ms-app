import {GET_FILE_FIELDS} from './types';
import dispatcher from '../../app.dispatcher';
export default function GetFileFields(fileId, callback) {
    dispatcher.dispatch(
        {
            type: GET_FILE_FIELDS,
            id: fileId,
            callback: callback
        }
    );
}