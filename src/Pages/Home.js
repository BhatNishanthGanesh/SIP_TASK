import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel'
import {CardList, cardList} from '../components/cards'
import Accordin from '../components/accordoin'
import Btn from '../components/Btn'

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <div>
                <CardList />
            </div>
            <div>
                <Accordin />
            </div>
            <div>
                <Btn />
            </div>
        </div>
    )
}

export default Home
