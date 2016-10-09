import dispatcher from '../../app.dispatcher';
import {GET_FILES} from './types';
export default function GetFiles(callback) {
    dispatcher.dispatch({
        callback: callback,
        type: GET_FILES
    });
}
