import { Component } from "react";

class Person extends Component {
 
  componentWillUnmount(){
    console.log(this.props.person);                     
    alert(`A person with email ${this.props.person.email} is removed from your network`);
   }

  render() {
    const { img, email } = this.props.person;
    const {index,person,handleClick} = this.props;
    return (
      <div className="person">
        <b onClick={()=>{handleClick(index)}}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
  
}

export default Person;
