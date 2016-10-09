import { EventEmitter } from 'events';
import dispatcher from '../app.dispatcher';
import {GET_FILES, CREATE_FILE, REMOVE_FILE} from './actions/types';
import axios  from 'axios';
const FILES_URL = process.env.FILES_URL || 'https://gds-ms.firebaseio.com/config-files';
class FileListStore extends EventEmitter {
    constructor() {
        super();
    }

    getFiles(callback) {
        axios.get(FILES_URL + '.json')
            .then((response) => {
                callback(undefined, JSON.stringify(response.data));
            })
            .catch((err) => {
                callback(err);
            });
    }
    createFile(data, callback) {
        axios.post(FILES_URL + '.json', data)
            .then(() => {
                callback();
            })
            .catch((err) => {
                callback(err);
            });
    }
    removeFile(id, callback) {
        axios.delete(FILES_URL + '/' + id + '.json')
            .then(() => {
                callback();
            })
            .catch((err) => {
                callback(err);
            });
    }
    handler(action) {
        switch (action.type) {
            case GET_FILES:
                this.getFiles(action.callback);
                break;
            case CREATE_FILE:
                this.createFile(action.data, action.callback);
                break;
            case REMOVE_FILE:
                this.removeFile(action.id, action.callback);
                break;
        }
    }
}
const fileListStore = new FileListStore;
dispatcher.register(fileListStore.handler.bind(fileListStore));
export default fileListStore;