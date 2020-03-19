import React, {Component} from "react";
import styles from './users.module.scss'
import {connect} from "react-redux";
import {fetchUsers} from "../../store/actions/users";
import Loader from "../UI/loader/loader";
import {Container, Row, Col} from "react-bootstrap";
import {Tooltip, Zoom} from '@material-ui/core/'
import img from '../../img/photo-cover.png'
class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers(1, true)
    }

    render() {
        const users = this.props.users.map(user => {
                return (
                    <Col key={user.id} xs={12} md={4} className={styles.col}>
                        <div className={styles.wrapperUser}>
                            <div className={styles.cover}>
                                <img src={user.photo} alt=""/>
                            </div>
                            <Tooltip TransitionComponent={Zoom} title={user.name}><h2>{user.name}</h2></Tooltip>
                            <Tooltip TransitionComponent={Zoom} title={user.position}><p>{user.position}</p></Tooltip>
                            <Tooltip TransitionComponent={Zoom} title={user.email}><p>{user.email}</p></Tooltip>
                            <Tooltip TransitionComponent={Zoom} title={user.phone}><p>{user.phone}</p></Tooltip>
                        </div>
                    </Col>
                )
            }
        );

        return (
            <div style={{background: 'rgb(249,249,243)', textAlign: "center"}} id='section3'>
                {
                    this.props.loading ? <Loader/>
                    : <Container fluid className={styles.wrapperCont} >
                            <h1>Our cheerful users</h1>
                            <p>Attention! Sorting users by registration date</p>
                            <Row style={{paddingTop: '2rem', paddingBottom: "2rem"}}>
                                {users}
                            </Row>

                            {
                                this.props.notFound ?
                                    null
                                    : <p className={styles.button}><button
                                        onClick={() => this.props.plusNewUser(this.props.numberOfPage, false)}
                                        className={styles.button}
                                    >
                                        Show more
                                      </button>
                                    </p>
                            }
                        </Container>
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        users: state.users.users,
        loading: state.users.loading,
        numberOfPage: state.users.numberOfPage,
        error: state.users.error,
        notFound: state.users.notFound,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: (page, prop) => dispatch(fetchUsers(page, prop)),
        plusNewUser: (props, prop) => dispatch(fetchUsers(props, prop))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)