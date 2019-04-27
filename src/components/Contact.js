import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <section>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field half"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="field half"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="field"><textarea name="message" id="message" placeholder="Message" rows="4" /></div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}
