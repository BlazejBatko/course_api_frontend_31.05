import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Utwórz swój własny spis kursów i studentów!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                     <CardItem 
                     src="StudentImage.jpg"
                     text="Zapisz Studenta" 
                     label='Student'
                     path='/studenci'
                     />
                         <CardItem 
                     src="CourseImage.jpg"
                     text="Zapisz Kurs" 
                     label='Kurs'
                     path='/kursy'
                     />
                         <CardItem 
                     src="SignupImage.jpg"
                     text="Załóż Konto" 
                     label='Konto'
                     path='/signup'
                     />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
