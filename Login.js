
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {connect} from 'react-redux'
import { login } from './action.js'

const avatarUri = './assets/avatar.png'
class Login extends Component {
    constructor(props){  
        super(props); 
        this.state = {
            username: '',
            password: ''
        }; 
    }

    componentDidMount(){
      this.setState({
        username: '',
        password: ''
      })
    } 

    render() {
        return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView
            keyboardShouldPersistTaps={'always'}
            style={styles.scrollView}>
                <View  style={styles.container}>
                <View>
                    <Image source={require('./assets/avatar.png')} style={styles.userAvatar}/>
                    <Text style={[styles.primaryText, styles.headingText]}>APPINESS INTERACTIVE</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.primaryText}>Username</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Enter username" 
                    value={this.state.username}
                    onChangeText={(value) => {
                        this.setState({username: value})
                    }}
                    />
                    <Text style={styles.primaryText}>Password</Text>
                    <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder="Enter password" 
                    value={this.state.password}
                    onChangeText={(value) => {
                        this.setState({password: value})
                    }}
                    />
                    <TouchableOpacity  style={styles.button} onPress={() => this.handleSubmitClick()}>
                      <Text  style={[styles.primaryText, styles.buttonText]}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </>
        );
    }

    handleSubmitClick = () => {
        let credentials = {
          username: this.state.username,
          password: this.state.password
        }
        let defaultCredentials = {
          username: 'hruday@gmail.com',
          password: 'hruday123'
        }
        if(credentials.username === defaultCredentials.username && credentials.password === defaultCredentials.password ){
          this.props.login(credentials);
          this.props.navigation.navigate('Dashboard')
        }
        
    }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    marginTop: 150,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 60,
    alignSelf: 'flex-start'
  },
  userAvatar: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  primaryText: {
    color: '#32CD32'
  },
  textInput: {
    width: '100%',
    borderColor: '#32CD32',
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 5,
    fontSize: 12
  },
  button: {
    width: '50%',
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30
  },
  buttonText: {
    fontSize: 14,
    color: '#e8e8e8',
    alignSelf: 'center'
  },
  headingText: {
    fontSize: 18
  }
 
});


const mapStateToProps = (state) => {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++',state)
  return{
    username: state.loginUser.username,
    password: state.loginUser.password,
    isLoggedIn: state.loginUser.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (credentials) => dispatch(login(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
