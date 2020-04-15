import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;