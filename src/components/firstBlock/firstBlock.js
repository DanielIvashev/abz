import React from "react";
import styles from './firstBlock.module.scss'
import {Container, Row, Col} from "react-bootstrap";


const FirstBlock = props => (
    <Container fluid className={styles.wrapper} id='section1'>
        <Row>
            <Col xs={12} md={7} lg={7}>
                <h1>Test assignment for frontend developer position</h1>
                <p>We kindly remind you that your test assignment
                    should be submitted as a link ti github/bitbucket
                    repository. Please be patient, we consider and
                    respond to every application that meets minimum
                    requirements. We look forward to your submission.
                    Good Luck! The photo has to scale in the banner area on the different screens</p>
                <p className={styles.button}><button>Sing up now</button></p>
            </Col>
            <Col xs={0} md={5} lg={5}></Col>
        </Row>
    </Container>
);

export default FirstBlock