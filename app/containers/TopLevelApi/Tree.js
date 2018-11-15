import React from 'react';
import PropTypes from 'prop-types';
// import styles from './style.less';

export default class Tree extends React.PureComponent {
    renderTreeNode = (node) => node;

    render() {
        const { children } = this.props;
        return <ul>{React.Children.map(children, this.renderTreeNode)}</ul>;
    }
}

Tree.propTypes = {
    children: PropTypes.node,
};
