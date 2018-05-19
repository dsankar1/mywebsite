import React from "react";
import { Carousel } from "react-bootstrap";
import connectImg from "../res/carousel/Connect4.PNG";
import gridworldImg from "../res/carousel/Gridworld.PNG";
import pacmanImg from "../res/carousel/PacMan.PNG";

const Slideshow = props => (
    <div style={{margin:"6px 0"}}>
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="connect 4" src={connectImg} />
                <Carousel.Caption>
                    <h3>Min-Max Connect Four</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="gridworld" src={gridworldImg} />
                <Carousel.Caption>
                    <h3>SARSA-Lambda GridWorld</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="pac man" src={pacmanImg} />
                <Carousel.Caption>
                    <h3>Pac Man</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default Slideshow;