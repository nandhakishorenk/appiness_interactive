/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text} from 'react-native'
import { connect } from 'react-redux';


class RootContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidMount() {
   this.loginStatus()
  }

  loginStatus() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === true && isLoggedIn !== undefined) {
      this.props.navigation.navigate('Dashboard')
    } else {
        this.props.navigation.push('Login')
    }
  }

  render() {
    return (
        <View >  
            <Text>Loading...</Text>
        </View>
    )
  }
}


const mapStateToProps = (state) => {
    return{
      username: state.loginUser.username,
      password: state.loginUser.password,
      isLoggedIn: state.loginUser.isLoggedIn,
    }
  }
export default connect(mapStateToProps) (RootContainer);



