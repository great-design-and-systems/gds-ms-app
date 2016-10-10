import React from 'react';

export default class Field extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <li class="tabs-title"><a class="colums large-9 medium-9 small-9 field">{this.props.field.field}</a><a class="colums large-3 medium-3 small-3 remove">remove</a></li>
        );
    }
}