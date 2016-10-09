import dispatcher from '../../app.dispatcher';
import {CREATE_FILE} from './types';
export default function CreateFile(data, callback) {
    dispatcher.dispatch({
        data: data,
        callback: callback,
        type: CREATE_FILE
    });
}