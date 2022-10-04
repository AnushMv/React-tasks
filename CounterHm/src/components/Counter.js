import {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0 ,
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        // this.handleInputs = this.handleInputs.bind(this);
    }
    static getDerivedStateFromProps(props, state){
        if(props.reset){
            return {

                count: 0,
            }
        }
        return null;
    }
    // handleInputs(){
    //     this.setState({
    //         initial: prompt('put minimum value') || 0,
    //         max: prompt('put max value') || 20,
    //         step: prompt('put step') || 1,
    //     })
//}
    componentDidUpdate(prevProps, prevState, snapshot){

        if(this.state.count === -3 || this.state.count === 10){
             this.props.setIsButtonClickable();
        }

    }
    handleAdd(){
        this.setState({
            count: this.state.count+1
           // count: this.state.count+this.state.step
        })
    }
    handleSub(){
        this.setState({
            count: this.state.count-1
            //count: this.state.count-this.state.step
        })

    }

    render(){
        const {count} = this.state;
        const {isButtonClickable} = this.props;
        const disabled = isButtonClickable;
        return (
          <div>
              <h1 className = {'title'}>Counter</h1>
              {/*<button className={'setValues'} onClick = {this.handleInputs}>Set Values</button>*/}
              <div className={'container'}>
                  <button disabled ={disabled} className={`button ${isButtonClickable ? 'disabled' : ''}`} onClick = {this.handleSub}>-</button>
                  <h1  className ={'counter'}>  {count}</h1>
                  <button  disabled={disabled} className={`button ${isButtonClickable ? 'disabled' : ''}`} onClick = {this.handleAdd}>+</button>

              </div>

          </div>
        )
    }
}

export default Counter;