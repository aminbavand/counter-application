import React, { Component } from 'react';
class Counter extends Component {

    state = {
        // count: this.props.value
        value: this.props.value
        // tags: ['tag1','tag2','tag3']
    };


    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }


    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }




    handleIncrement = (product) =>{

        console.log( product);
        this.setState({ value: this.state.value + 1 });//set state override properties that exist. Whenever we call setState it applies changes and run render method again
        //Whenever we made some changes that we want to show on screen, we have to use setState
    }



    // doHandleIncrement = () =>{
    //     this.handleIncrement({ id: 1});
    // }




    render() {    
        // console.log('props', this.props);
        

        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                
                <button 
                    // onClick={this.handleIncrement} 
                    // onClick={this.doHandleIncrement} 
                    onClick={ () => this.handleIncrement({id : 1})} 
                    className="btn btn-secondary btn-sm">
                    increment</button>

                {/* {this.renderTags()} */}



            </div>
        );
    }


    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value ===0 ? "zero": value;
    }




}
 
export default Counter;