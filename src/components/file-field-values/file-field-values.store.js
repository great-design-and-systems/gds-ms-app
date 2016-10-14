import { EventEmitter } from 'events';
import dispatcher from '../app.dispatcher';
import axios from 'axios';
const FILES_URL = process.env.FILES_URL || 'https://gds-ms.firebaseio.com/config-files';

class FileFieldValuesStore extends EventEmitter {
    constructor() {
        super();
    }
}