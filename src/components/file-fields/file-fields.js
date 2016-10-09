import React from 'React';

export default class FileFields extends React.Component {
    render() {
        return (<div class="large-3 medium-3 columns">{this.props.selectedFile}</div>);
    }
}