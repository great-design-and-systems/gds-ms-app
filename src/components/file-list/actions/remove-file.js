import dispatcher from '../../app.dispatcher';
import {REMOVE_FILE} from './types';
export default function RemoveFile(id, callback) {
    dispatcher.dispatch({
        callback: callback,
        id: id,
        type: REMOVE_FILE
    });
}
