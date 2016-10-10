import {RELOAD_FILE_FIELDS} from './types';
import dispatcher from '../../app.dispatcher';
export default function ReloadFileFields() {
    dispatcher.dispatch(
        {
            type: RELOAD_FILE_FIELDS
        }
    );
}