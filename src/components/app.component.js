import React from 'react';
import FileList from './file-list/file-list';
import FileFields from './file-fields/file-fields';
import ReloadFileFields from './file-fields/actions/reload-file-fields';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import FileFieldValues from './file-field-values/file-field-values';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    selectFile(selectedFile) {
        this.setState({
            selectedFile
        });
    }
    render() {
        return (
            <div>
                <div><h5>GDS MS Config File Generator</h5></div>
                <FileList selectFile={this.selectFile.bind(this)} />
                <FileFields fileId={this.state.selectedFile} />
                <div class="large-4 medium-4">
                    <Router history={hashHistory}>
                        <Route path='/' component={FileFieldValues}>
                        </Route>
                    </Router>
                </div>
            </div>
        )
    }
}
