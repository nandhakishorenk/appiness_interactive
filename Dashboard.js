
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import { logout } from './action.js'

const DATA = [{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9415346314"
    },
    {
    "id":3,
    "name":"test3",
    
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9415346315"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9415346316"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9415346317"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9415346318"
    }
    ]




class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
            <View  style={styles.container}>
              <Text>Dash-Board</Text>
              <FlatList
                  data={DATA}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
              />
              <View>
              <TouchableOpacity  style={styles.button} onPress={
                        () => this.handleSubmitClick()
                        }>
                    <Text  style={[styles.primaryText, styles.buttonText]}>LOGOUT</Text>
                    </TouchableOpacity>
              </View>
            </View>
      </>
    );
  }

  renderItem = ({item}) => {
    return(
        <View style={styles.row}>
            <View style={styles.rowTop}>
                <Text style={styles.greenText}>{item.name}</Text>
                <Text style={styles.blackText}>{item.gender}</Text>
                <Text style={styles.blackText}>{item.age}</Text>
            </View>
            <View style={styles.rowBottom}>
                <Text style={styles.blackText}>{item.email}</Text>
                <Text style={styles.blackText}>{item.phoneNo}</Text>
            </View>
        </View>
    )
}

  handleSubmitClick = () => {
      this.props.logout();
      this.props.navigation.navigate('Login')
    
  }

}
    


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    backgroundColor: '#e8e8e8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'column',
    padding: 15
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  greenText: {
    color: '#32CD32',
    fontSize:16
  },
  blackText: {
    color: '#000',
    fontSize:14
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
 
});

const mapStateToProps = (state) => {
  return{
    username: state.loginUser.username,
      password: state.loginUser.password,
      isLoggedIn: state.loginUser.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);

// export default Dashboard
