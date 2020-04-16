import Header from '../header/header';
import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;