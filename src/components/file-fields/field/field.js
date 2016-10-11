import React from 'react';

export default class Field extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <li class="tabs-title"><a class="column large-9 medium-9 small-9 field">{this.props.field.value}</a><a class="column large-3 medium-3 small-3">remove</a></li>
        );
    }
}