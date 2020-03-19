import React from "react";
import styles from './secondBlock.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import img from '../../img/man-laptop.svg'

const SecondBlock = () => (
    <Container fluid className={styles.container} id='section2'>
        <Row>
            <Col md={12} lg={12}>
                <h1>Let's get acquainted</h1>
            </Col>
            <Col xs={12} md={5}>
                <div className={styles.imageWrapper}>
                    <img src={img} alt=""/>
                </div>
            </Col>
            <Col xs={12} md={7}>
                <h2>I am a cool frontend developer</h2>
                <p>We will evaluate how clean your approach to writing CSS and JavaScript code is. 
                    You can use any CSS and javascript 3rd libraries without any restriction.
                    <br/>
                    <br/>
                    If 3rd party css/javascript libraries are added to the project via 
                    bower/npm/yarn you will get bonus points. If you use any task runner(gulp/webpack)
                    you will get bonus as well. Slice service directory page PSD mockup into HTML5/CSS3. 
                </p>
                <div className={styles.linkWrapper}><a>Sing up now</a></div>
            </Col>
        </Row>

    </Container>
);

export default SecondBlock