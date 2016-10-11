import React from 'react';
import FileList from './file-list/file-list';
import FileFields from './file-fields/file-fields';
import ReloadFileFields from './file-fields/actions/reload-file-fields';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    selectFile(selectedFile) {
        this.setState({
            selectedFile
        });
        if (selectedFile.length > 0) {
            new ReloadFileFields(selectedFile);
        }
    }
    render() {
        return (
            <div>
                <div><h5>GDS MS Config File Generator</h5></div>
                <FileList selectFile={this.selectFile.bind(this) } />
                <FileFields fileId={this.state.selectedFile}/>
            </div>
        )
    }
}
