import React from 'react'

import AppBar from '../components/AppBar'
import { Card, Image } from 'semantic-ui-react'

const Home = () => {
    return (
        <>
            <AppBar />
                <div className="ui container">
                    <div className="ui segment">
                        <h1 className="main-title">
                            <div>
                                <span>YOUR </span>
                                <span>BAND </span>
                            </div>
                            <span>S</span>
                            <span className="flickering">U</span>
                            <span>CKS</span>
                        </h1>
                        <Card.Group>
                            <Card>
                                <Image src="https://img.discogs.com/KXAqKm3ssz9NEa1O3l50Yl7uqTY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1230305-1260858035.jpeg.jpg" wrapped ui={false}></Image>
                            </Card>
                        </Card.Group>
                    </div>
                </div>
        </>
    )
}

export default Home