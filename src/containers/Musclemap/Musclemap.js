import React from 'react';
import './musclemap_Male.css';
import './musclemap_Female.css';
import './mobileStyles.css';
import Images from '../../components/images/Images';
import MediaQuery from 'react-responsive';
import Firebase from 'firebase';
import config from '../../components/Firebase/config';


class Musclemap extends React.Component {
    
    constructor(props){
        super(props);
   
        try {
            Firebase.initializeApp(config);
        } catch (err) {
            // we skip the “already exists” message which is
            // not an actual error when we’re hot-reloading
            if (!/already exists/.test(err.message)) {
            console.error(`Firebase initialization error raised, ${err.stack}`)
            }}

        this.state = {
            viewer: '',
            selection: 'male',
            Male: ['Male'],
            Female: ['Female'],
            content: '',
            isMobile: false,
            db: {}
        }
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
    
    getUserData = () => {
        let db = Firebase.database().ref('/gender'); 
        db.on('value', snapshot => {
            const db = snapshot.val();
            this.setState({ db: db });
        });
      }
    
    async componentDidMount() {

        this.getUserData();

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

    divClickHandler = () => {

        //  WILL USE LATER ON AFTER FIXING MOBILE COMPATIBILITY ISSUES
        // var muscleExerciseDiv = document.querySelector('.exerciseImg');
        // muscleExerciseDiv.scrollIntoView({ behavior: 'smooth', block: 'end'}); 


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
                <div className={this.state.viewer} onClick={this.divClickHandler}>
                    <Images selection={this.state.selection} db={this.state.db} />
                </div>
                </MediaQuery>
        )
    }
}

export default Musclemap;