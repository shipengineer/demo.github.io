import {  useState } from 'react'
import styles from './book-button.module.css'
const BookButton = (props) => {

const [inCartStatus,setStatus]=useState('Book Now')
const bookHandler = ()=>{
    
if(!props.id){
    console.error('no ID in book cart ');
    setStatus('Out of Stock')
    return
}
//Здесь скорее не пост а ртк диспач на слайс юзера
//axios.post('someURL',props.id).catch(console.log('no respoce'))
setStatus('Checkout')
console.log(props.id);
}
    return (<button className={styles.button} onClick={bookHandler}> 
      {inCartStatus}
    </button> );
}

export default BookButton;