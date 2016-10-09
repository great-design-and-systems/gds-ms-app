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
        return (<li class="tabs-title"><a onClick={this.selectFile.bind(this)} class="column large-10 medium-10 small-10" href={'#_panel_' + this.props.fileId}> {this.props.file.fileName}</a>
            <a onClick={this.removeFile.bind(this) } class="large-2 medium-2 small-2 column">remove</a></li>)
    }
}