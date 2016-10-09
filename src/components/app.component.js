import React from 'react';
import FileList from './file-list/file-list';
import FileFields from './file-fields/file-fields';

export default class App extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.setState({
            selectedFile: ''
        });
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
                <FileList selectFile={this.selectFile.bind(this) } />
                <FileFields selectedFile={this.state.selectedFile} />
            </div>
        )
    }
}
