import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import markdownify from '../utils/markdownify';
import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Mission extends React.Component {
    render() {
        return (
            <section className="wrapper style3 special">
                <div className="inner">
                    <header>
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {markdownify(_.get(this.props, 'section.content'))}
                    </header>
                    {_.get(this.props, 'section.actions') && 
                        <footer>
                            <ul className="actions special">
                                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                    <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', 'big', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</a></li>
                                ))}
                            </ul>
                        </footer>
                    }
                </div>
            </section>
        );
    }
}
