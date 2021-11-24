import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from "reactstrap";
import {yuv2rgb} from "./colorGen";

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();

function App() {

    const size_x = 25;
    const size_y = 14;

    const onClickCell = (i: string, j: string, ref: any) => {
        console.log(ref.target.style.backgroundColor);
        ref.target.style.backgroundColor = 'red';
        ref.target.style.scale = 1.5;
        console.log(`Clicked on cell ${i}, ${j}`);
    };


    return (
        <Container>
            {
                Object.keys([...Array(size_y)]).map(i =>
                    <Row>

                        {
                            Object.keys([...Array(size_x)]).map(j =>
                                <input type="submit" value={alphabet[parseInt(i)] + (parseInt(j) + 1)} onClick={(e) => {
                                    onClickCell(i, j, e)
                                }} className=" d-flex align-items-center  grow justify-content-center "
                                       style={{
                                           borderRadius: 5,
                                           margin: 2,
                                           width: 40,
                                           height: 50,
                                           backgroundColor: yuv2rgb(90,i, j, size_y, size_x)
                                       }}>

                                </input>
                            )
                        }

                    </Row>
                )
            }
        </Container>
    );
}

export default App;
