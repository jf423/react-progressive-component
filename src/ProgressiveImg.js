import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import imageHandler from './util';

class ProgressiveImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sLoading: true,
            error: false
        };
    }
    componentDidMount() {
        const { src, loader } = this.props;
        imageHandler(src)
            .then(() => {
                this.setState({ loading: false });
            })
            .catch(() => {
                this.setState({ error: true });
            });
        imageHandler(loader)
            .then(() => {
                this.setState({ sLoading: false });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    }
    render() {
        const { children, loader, loaderStyle } = this.props;
        const { loading, sLoading } = this.state;
        const ImageLoader = ImageLoaderStyle(children.type).extend`${loaderStyle}`;
        return (
            <ImageStyle isLoaded={!loading || !sLoading}>
                {loading ? <ImageLoader src={loader} /> : children}
            </ImageStyle>
        );
    }
}

export default ProgressiveImg;

ProgressiveImg.propTypes = {
    children: PropTypes.element,
    src: PropTypes.string,
    loader: PropTypes.string,
    loaderStyle: PropTypes.string
};

const ImageStyle = styled.div`
    width: inherit;
    height: inherit;
    filter: blur(10px);
    transition: filter .5s linear;
    filter: ${props => (props.isLoaded ? 'blur(0px)' : 'blur(10px)')};
`;

const ImageLoaderStyle = element => (styled(element)`
    filter: blur(10px);
    background: url(${props => props.src}) center center / cover no-repeat;
`);
