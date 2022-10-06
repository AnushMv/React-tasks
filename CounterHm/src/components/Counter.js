import {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0 ,
            min: -Infinity,
            max: Infinity,
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
//         handleInputMax(){
//             if(this.state.mintCount === undefined && this.state.maxCount === undefined){
//             this.setState({
//                 min:  0,
//                 max:  <input/>,
//                 step: 1,
//             })
//         }else{
//                 this.setState({
//                     min:  minCount,
//                     max:  maxCount,
//                     step: step,
//                 })
//             }
//
//
// }
    componentDidUpdate(prevProps, prevState, snapshot){

        if(this.state.count === this.state.min || this.state.count === this.state.max){
             this.props.setIsButtonClickable();
        }

    }
    handleAdd(){
        this.setState({
            count: this.state.count + 1
        })
    }
        // if(this.state.step === undefined){
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }else{
        //     this.setState({
        //         count: this.state.count + Number(this.state.step)
        //     })
        // }


    handleSub(){
    this.setState({
        count: this.state.count - 1
    })
        // if(this.state.step === undefined){
        //     this.setState({
        //         count: this.state.count - 1
        //     })
        // }else{
        //     this.setState({
        //         count: this.state.count - Number(this.state.step)
        //     })
        // }

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
                  <button className = "min"> min <input type = "text" /> </button>
                  <button className = "max"> max <input type = "text" /> </button>
                  <button className = "step"> step <input type = "text" /> </button>
              </div>


          </div>
        )
    }
}

export default Counter;