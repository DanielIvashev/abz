import React, {Component, Fragment} from "react";
import styles from './formBlock.module.scss'
import {connect} from "react-redux";
import Form from 'react-bootstrap/Form'
import {Col, Container, Modal, Row} from "react-bootstrap";
import {handleChange, fetchPositions, fetchNewUser} from "../../store/actions/formBlock";
import PropTypes from 'prop-types';
import {fetchUsers} from "../../store/actions/users";

class FormBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount = () => {
        this.props.fetchPosition()
    };


    componentDidUpdate(nextProps) {
        const show  = this.props.newUserIsAdded;
        if (nextProps.newUserIsAdded !== show) {
            if (show) {
                this.setState({ show: show})
            }
        }
    }

    render() {

         let handleCloseModal = () => {
             this.setState({
                 show: false
             });
              this.props.fetchUsers(1, true)
         };


        const handleSub = async e => {
            e.preventDefault();
            await this.props.fetchAddNewUser(
                this.props.name.value,
                this.props.email.value,
                this.props.phone.value,
                this.props.currentPosition,
                this.props.photo.value
            );
        };

        let fileErrors = this.props.photo.errors.map(error => {
            return (
                <small>{error}</small>
            )
        });

        const title = this.props.photo.value.name !== undefined;

        const positions = this.props.position.map(number => {
            return (
                <div className="custom-control custom-radio">
                    <input
                        required
                        type="radio"
                        id={number.id}
                        name="positions"
                        checked={this.props.currentPosition == number.id}
                        value={number.id}
                        onChange={this.props.handleChange}
                        className="custom-control-input"/>
                    <label
                        className="custom-control-label"
                        htmlFor={number.id}>
                        {number.name}
                    </label>
                </div>
            )
        });
        return (
            <div id='section4'>
            <Container fluid className={styles.containerWrapper}>
                <Row>
                    <Col xs={12} md={8} className={styles.col}>
                        <h1>Register to get a work</h1>
                        <p>Attention! After successful registration and alert,
                            update the list of users in the block from the top</p>
                        <Form onSubmit={handleSub}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name"
                                              className={this.props.name.hasError[0] ? 'is-invalid' : ''}
                                              placeholder="Your name"
                                              value={this.props.name.value}
                                              onChange={(e) => this.props.handleChange(e, "name")}
                                              required
                                />
                                {
                                    this.props.name.hasError[0] ?
                                        <small className='invalid-feedback'
                                        >Error</small>
                                        : ''
                                }
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              className={this.props.email.hasError[0] ? 'is-invalid' : ''}
                                              placeholder="Enter email"
                                              value={this.props.email.value}
                                              onChange={(e) => this.props.handleChange(e, 'email')}
                                              required
                                />
                                {
                                    this.props.email.hasError[0] ?
                                        <small className='invalid-feedback'
                                        >Error</small>
                                        : ''
                                }
                            </Form.Group>

                            <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text"
                                              className={this.props.phone.hasError[0] ? 'is-invalid' : ''}
                                              placeholder="+380 XX XXX XX XX"
                                              value={this.props.phone.value}
                                              onChange={(e) => this.props.handleChange(e, 'phone')}
                                              required
                                />
                                {
                                    this.props.phone.hasError[0] ?
                                        <small className='invalid-feedback'
                                        >Error</small>
                                        : ''
                                }
                            </Form.Group>

                            <p>Select your position</p>


                                {positions}


                            <p style={{marginTop: "1rem", marginBottom: "0.5rem"}}>Photo</p>

                            <div className="custom-file" style={{marginBottom: "1rem"}}>
                                <input type="file"
                                       className="custom-file-input"
                                       id="customFile"
                                       onChange={this.props.handleChange}
                                       required
                                />
                                <label className="custom-file-label" htmlFor="customFile">
                                    { title ?
                                        this.props.photo.value.name :
                                        'Upload your photo'
                                    }
                                </label>
                                <div style={{color: "red"}}>
                                    {
                                        fileErrors
                                    }
                                </div>
                            </div>


                            <div style={{color: 'red', textAlign: 'center'}}>
                                <h5>{this.props.errorWithAddingUsers}</h5>
                            </div>
                            <p className={styles.button}>
                                <button type="submit" disabled={this.props.error ? "disabled" : ''}>
                                    Sing up now
                                </button>
                            </p>
                        </Form>
                    </Col>
                </Row>
                <Modal show={this.state.show}
                       onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Congratulations</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have successfully passed the registration</Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleCloseModal}>
                            Great
                        </button>
                    </Modal.Footer>
                </Modal>
            </Container>
            </div>
        )
    }
}

FormBlock.propTypes = {
    name: PropTypes.object,
    email: PropTypes.object,
    phone: PropTypes.object,
    position: PropTypes.array,
    photo: PropTypes.object,
    loading: PropTypes.bool,
    currentPosition: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        name: state.formBlock.name,
        email: state.formBlock.email,
        phone: state.formBlock.phone,
        position: state.formBlock.position,
        photo: state.formBlock.photo,
        loading: state.formBlock.loading,
        currentPosition: state.formBlock.currentPosition,
        error: state.formBlock.error,
        newUserIsAdded: state.formBlock.newUserIsAdded,
        errorWithAddingUsers: state.formBlock.errorWithAddingUsers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (e, name) => dispatch(handleChange(e, name)),
        fetchPosition: (...props) => dispatch(fetchPositions(...props)),
        fetchAddNewUser: (...props) => dispatch(fetchNewUser(...props)),
        fetchUsers: (page, prop) => dispatch(fetchUsers(page, prop)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormBlock)
