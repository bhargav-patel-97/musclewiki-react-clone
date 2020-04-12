import React from 'react';
import './Musclemap.css'
import imageLoader from '../../components/images/Images';

class Musclemap extends React.Component {
    constructor() {
        super();
        this.state = {
            images : [
            ]
         }
        }

    componentDidMount() {
        const images = imageLoader()
        this.setState({images})
        console.log(this.state);
    }
    
    render() {
        return(
            <div className="Musclemap">
                { this.state.images.map
                    (({key, className, src, alt}) => <img key={key} src={src} alt={alt} className={className}/>)
                }
            </div>
        );
    }

}

export default Musclemap;