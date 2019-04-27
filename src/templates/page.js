import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

import {Layout} from '../components/index';
import markdownify from '../utils/markdownify';
import safePrefix from '../utils/safePrefix';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section id="main" className="wrapper style1">
                <div className="inner">
                    <header className="major">
                        <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                        <span className="image main"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt="" /></span>
                    }
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
            </section>
            </Layout>
        );
    }
}
