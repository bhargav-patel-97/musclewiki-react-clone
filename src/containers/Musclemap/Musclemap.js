import React from 'react';
import './musclemap_Male.css'
import './musclemap_Female.css'
import images from '../../components/images/Images';

class Musclemap extends React.Component {

    state = {
        images : [],
        selection: 'male',
        Male: ['Male'],
        Female: ['Female']
    }
            
    femaleClickHandler = () => {
    const maleBtn =  document.querySelector('.Male');
    const femaleBtn =  document.querySelector('.Female');
    maleBtn.classList.add('Inactive');
    femaleBtn.classList.remove('Inactive');
    
    this.setState
    ({
        selection:'female',
        images: images.female
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
        images: images.male
    });
    }
        
    componentDidMount() {
        const initialImages = images.male;
        this.setState({images: initialImages})
        if(this.state.selection === 'male') {
            this.setState({Female:['Female Inactive']});
        }
    }
    
    render() {
        return([
            <div className="genderBtn">
                <button className={this.state.Male} onClick={this.maleClickHandler}>Male</button>
                <button className={this.state.Female} onClick={this.femaleClickHandler}>Female</button>
            </div>,
            <div className="Musclemap">
                { this.state.images.map
                    (({key, className, src, alt}) => <img key={key} src={src} alt={alt} className={className}/>)
                }
            </div>
            ]);
    }

}

export default Musclemap;