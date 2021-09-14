import React, { Component}from 'react';
import ServiceListDB from '../../ServiceList.json';

//if id equals  one two or three, return one two or three
// if id equals one, return all one props
//if id equals two, return all two props etc


// export function MassageChoice(m) {
//   // e.preventDefault();
//   let massageListChoices = ServiceListDB.map(item => (
//     console.log(item)
//   ))
//     console.log(massageListChoices)
// };

export default class MassageCardItem extends Component{
  constructor(props){
    super(props);
    this.state = {
    }

    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(e) {
    let massageListChoices = ServiceListDB.map(item => (
      console.log(item)
    ))
      console.log(massageListChoices)
    // document.getElementById("id");
    // let title = e.props.title;
    // let value = e.props.price1;
    // let id1 = e.props[0];
    // let id2 = e.props[1];
    // let id3 = e.props[2];
    // let time1 = e.props.time1;
    // if(value === '$55' && title === 'Deep Rest Massage') {
    //   console.log('this is 2')
    // }
    // console.log(e);
    // console.log(title);
    // console.log(id1);
    // console.log(id2);
    // console.log(id3);
  }
 
  render() {
  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__card'>
          <div className='massages__item__title__wrap'>{this.props.title}</div>
          <div className='massage__item__pricing'>{this.props.price}</div>
          <div className='massages__item__text'>{this.props.text}</div>
          <div className='massage__time__info'>
            <select className='time__dropdown' id='time__dropdown'>
                <option selected id='0'>Select a time</option>
                <option value='30' id='1' onClick={()=>this.handleChange(this)}>{this.props.time1}</option>
                <div id='showMe1'></div>
                <option id='2'>{this.props.time2}</option>
                <div id='showMe2'>This is the 60 min div</div>
                <option id='3'>{this.props.time3}</option>
                <div id='showMe3'>This is the 90 min div</div>
            </select>
          </div>
        </div>
      </li>
    </>
  );
  }
}
