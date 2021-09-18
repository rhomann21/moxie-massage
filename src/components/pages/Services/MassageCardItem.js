import React, { Component }from 'react';
import { Button } from '../../Button';
// import ServiceListDB from '../../ServiceList.json';

//if id equals  one two or three, return one two or three
// if id equals one, return all one props
//if id equals two, return all two props etc

// export function DropDown() {
//     const [time, timeChoice] = useState()
// }
// export function MassageChoice(m) {
//   // e.preventDefault();
//   let massageListChoices = ServiceListDB.map(item => (
//     console.log(item)
//   ))
//     console.log(massageListChoices)
// };

//set the state with the time, then use effect to set times in dropdown 
//onchange / onclick 


function MassageCardItem(props){
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     time: 
  //   }

  //   this.handleChange = this.handleChange.bind(this);
  
  // }


  // handleChange(e) {
  //   let massageListChoices = ServiceListDB.map(item => (
  //     console.log(item)
  //   ))
  //     console.log(massageListChoices)
  //   document.getElementById("id");
  //   let title = e.props.title;
  //   let value = e.props.price;
  //   let id1 = e.props[0];
  //   let id2 = e.props[1];
  //   let id3 = e.props[2];
  //   // let time1 = e.props.time1;
  //   if(value === '$55' && title === 'Deep Rest Massage') {
  //     console.log('this is 2')
  //   }
  //   console.log(e);
  //   console.log(title);
  //   console.log(id1);
  //   console.log(id2);
  //   console.log(id3);
  // }
 

  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__card'>
          <div className='massages__item__title__wrap'>{props.title}</div>
          <div className='massage__item__pricing'>{props.time1}  {props.price1}</div>
          <div className='massage__item__pricing'>{props.time2}  {props.price2}</div>
          <div className='massage__item__pricing'>{props.time3}  {props.price3}</div>
          <div className='massages__item__text'>{props.text}</div>
          <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick='/booking' 
                >
                    Book Now
                </Button>

          </div>
      </li>
    </>
  );
  }


  export default MassageCardItem
