import React from 'react';
import RemoveFile from '../actions/remove-file';
export default class ConfigFile extends React.Component {
    constructor() {
        super();
    }
    removeFile(e) {
        new RemoveFile(this.props.fileId, (err) => {
            if (!err) {
                this.props.getFiles();
            }
        })
    }
    selectFile(e){
        this.props.selectFile(this.props.fileId);
    }
    render() {
        return (<li class="tabs-title"><a onClick={this.selectFile.bind(this)} class="column large-9 medium-9 small-9" href={'#_panel_' + this.props.fileId}> {this.props.file.fileName}</a>
            <a onClick={this.removeFile.bind(this) } class="large-3 medium-3 small-3 column">remove</a></li>)
    }
}