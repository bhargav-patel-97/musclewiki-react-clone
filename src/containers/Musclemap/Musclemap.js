import React from 'react';
import './musclemap_Male.css';
import './musclemap_Female.css';
import './mobileStyles.css';

import Images from '../../components/images/Images';
import MediaQuery from 'react-responsive';


class Musclemap extends React.Component {
    
    state = {
        viewer: '',
        selection: 'male',
        Male: ['Male'],
        Female: ['Female'],
        content: '',
        isMobile: false
    }

    handleWindowResize = () => {
        this.setState({ isMobile: window.innerWidth < 480 });
    }
            
    femaleClickHandler = () => {
    const maleBtn =  document.querySelector('.Male');
    const femaleBtn =  document.querySelector('.Female');
    maleBtn.classList.add('Inactive');
    femaleBtn.classList.remove('Inactive');
    
    this.setState
    ({
        selection:'female',
    });
    }
    
    maleClickHandler = () => {
    const maleBtn =  document.querySelector('.Male');
    const femaleBtn =  document.querySelector('.Female');
    maleBtn.classList.remove('Inactive');
    femaleBtn.classList.add("Inactive");

    this.setState
    ({
        selection:'male',
    });
    }
        
    componentDidMount() {
        if(this.state.selection === 'male') {
            this.setState({Female:['Female Inactive']});
        }

        window.addEventListener('resize', this.onWindowResize);

        if(window.innerWidth < 1000) {
            this.setState({ viewer: 'mobileMusclemap' });
        }
        else {
            this.setState({ viewer: 'Musclemap' });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
      }

    render() {
        return(
                <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>    
                    <div className="genderBtn">
                        <button className={this.state.Male} onClick={this.maleClickHandler}>Male</button>
                        <button className={this.state.Female} onClick={this.femaleClickHandler}>Female</button>
                    </div>
                    <div className={this.state.viewer}>
                        <Images selection={this.state.selection} />
                    </div>
                </MediaQuery>
        )
    }
}

export default Musclemap;