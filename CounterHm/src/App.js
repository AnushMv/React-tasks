import {Component} from 'react';
import Counter from './components/Counter';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            reset: false,
            isButtonClickable: false,
        }

    }
    resetCounter = () => {
        this.setState({
            reset:  !this.state.reset,
        })

    }
    //if you press 'reset Counter' 2 times counter work again, or you need pres 'reset Counter' and 'start Counter'
    // startCounter = () => {
    //     this.setState({
    //         reset: !this.state.reset,
    //     })
    // }
    setIsButtonClickable = () => {
            this.setState({
                isButtonClickable: !this.state.isButtonClickable,
            })
        }

  render(){
    const {reset} = this.state;

    // const {start} = this.state;
    return(
        <div>
            <Counter  reset ={reset} />
            <button className={'reset'} onClick = {this.resetCounter}>Reset counter</button>

                {/*<button className={'start'} onClick = {this.startCounter}>Start counter</button>*/}
        </div>
    )
  }
}

export default App;
