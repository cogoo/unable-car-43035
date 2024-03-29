import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                </Helmet>
                <Header {...this.props} />
                <Menu {...this.props} />
                <div id="wrapper">
                    {this.props.children}
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
