import React, { Component } from 'react';
import { View, StyleSheet, TextInput, StatusBar, Text } from 'react-native';
// import TextBtn from '../components/common/TextBtn';
import Loading from '../components/common/Loading';
import { colors } from '../components/_base.js';

// Redux
import { connect } from 'react-redux';
// import { login, signUp } from '../actions/loginActions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.loginUser = this.loginUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
    }

    loginUser() {
        const nav = this.props.navigation;
        this.props.dispatchLogin(this.state.email, this.state.password, 'Home', nav);
    }

    signUpUser() {
        if (this.state.password.length < 6) {
            alert("Please enter at least 6 characters");
            return;
        }
        this.props.dispatchSignUp(this.state.email, this.state.password);
    }

    render() {
        const { loading, error } = this.props;
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> : 
                    <View>
                        <StatusBar 
                            barStyle="light-content"
                            />
                        <TextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Email"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            onChangeText={(email) => this.setState({email})}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            />
                        <TextInput 
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            />
                        { error && <Text style={styles.errorText}>{ error.message }</Text>}
                        {/* <TextBtn 
                            bkgColor={colors.loginBkgBtn}
                            color={colors.loginBtn}
                            onPress={this.loginUser}
                            text='LOGIN'
                            />
                        <TextBtn 
                            bkgColor={colors.signUpBkgBtn}
                            color={colors.signUpBtn}
                            onPress={this.signUpUser}
                            text='SIGN UP'
                            /> */}
                    </View>
                } 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    errorText: {
        color: '#c0392b'
    }
});

const mapStateToProps = (state) => {
    return {
        userData: state.appLogin.data,
        loading: state.appLogin.isLoading,
        finished: state.appLogin.loginFinished,
        error: state.appLogin.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogin: (email, password, scrName, nav) => dispatch(login(email, password, scrName, nav)),
        dispatchSignUp: (email, password) => dispatch(signUp(email, password))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);