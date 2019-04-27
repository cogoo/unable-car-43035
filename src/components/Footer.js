import React from 'react';
import _ from 'lodash';

import Social from './Social';
import Contact from './Contact';

export default class Footer extends React.Component {
    render() {
        return (
            <section id="footer" className="wrapper split style2">
                <div className="inner">
                    {_.get(this.props, 'pageContext.site.siteMetadata.social.enabled') && 
                        <Social {...this.props} />
                    }
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.enable_contact_section') && 
                        <Contact {...this.props} />
                    }
                </div>
                <div className="copyright">
                    <p>&copy; {_.get(this.props, 'pageContext.site.siteMetadata.title')}. All rights reserved. {_.get(this.props, 'pageContext.site.siteMetadata.footer.line_phrase')}</p>
                </div>
            </section>
        );
    }
}
