import React from 'react';
import GetFiles from './actions/get-files';
import CreateFile from './actions/create-file';
import FileListStore from './file-list.store';
import lodash from 'lodash';
import ConfigFile from './config-file/config-file';
export default class FileList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            files: []
        }
    }
    componentWillMount() {
        this.getFiles();
    }
    getFiles() {
        this.setState({
            loading: true
        });
        new GetFiles((err, data) => {
            if (!err) {
                this.setState({ files: JSON.parse(data) });
            }
            this.setState({
                loading: false,
                fileName: ''
            });
        });
    }
    handlerFileName(e) {
        const fileName = e.target.value;
        if (fileName.length > 0) {
            document.getElementById('addFileButton').removeAttribute('disabled');
        } else {
            document.getElementById('addFileButton').setAttribute('disabled', '');
        }
        this.setState({ fileName });
    }
    handleAddFile(e) {
        e.preventDefault();
        new CreateFile({ fileName: this.state.fileName, created: new Date().now }, (err) => {
            if (!err) {
                this.getFiles();
            }
        });
    }
    render() {
        let filesList = [];
        lodash.forIn(this.state.files, (file, key) => {
            filesList.push(<ConfigFile selectFile={this.props.selectFile.bind(this) } key={key} getFiles={this.getFiles.bind(this) } file={file} fileId={key}/>);
        });
        return (
            <div class="large-4 medium-4 columns">
                <div> {this.state.loading ? <span>Loading...</span> : ''}</div>
                <div >
                    <form  class="row collapse" onSubmit={this.handleAddFile.bind(this) }>
                        <div class="input-group">
                            <input value={this.state.fileName} class="input-group-field"  type="text" placeholder="file name" onChange={ this.handlerFileName.bind(this) } />
                            <div class="input-group-button">
                                <button class="button" id="addFileButton" disabled type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                    <ul class="tabs vertical" id="file-tabs" data-tabs>
                        {filesList}
                    </ul>
                </div>
            </div>
        )
    }
}
