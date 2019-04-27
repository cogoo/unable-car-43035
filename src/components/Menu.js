import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import safePrefix from '../utils/safePrefix';
import link from '../utils/link';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <h2>Menu</h2>
                <ul className="links">
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx}><a href={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</a></li>
                    ))}
                </ul>
                {_.get(this.props, 'pageContext.site.siteMetadata.menu.actions') && 
                    <ul className="actions stacked">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.menu.actions'), (action, action_idx) => (
                            <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', 'fit', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</a></li>
                        ))}
                    </ul>
                }
            </nav>
        );
    }
}
