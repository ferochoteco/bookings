import React, { Component } from 'react';
import { View, StyleSheet, TextInput, StatusBar, Text, Button } from 'react-native';
// import TextBtn from '../components/common/TextBtn';
import Loading from '../components/common/Loading';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { colors } from '../components/_base.js';

// Redux
import { connect } from 'react-redux';
// import { login, signUp } from '../actions/loginActions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: '',
            isSigninInProgress: false
        }
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        GoogleSignin.configure();
    }

    signIn = async () => {
        this.setState({
            isSigninInProgress: true
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo, isSigninInProgress: false });
            console.log(this.state.userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
                console.log(error);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error);
            } else {
                // some other error happened
                console.log(error.code);
            }
        }
    };

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { loading, error } = this.props;
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> : 
                    <View>
                        <StatusBar 
                            barStyle="light-content"
                            />
                        <GoogleSigninButton
                            style={{ width: 48, height: 48 }}
                            size={GoogleSigninButton.Size.Icon}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this.signIn}
                            disabled={this.state.isSigninInProgress} />
                        <Button
                            onPress={this.signOut}
                            title="Sign Out"
                            color="green"
                            accessibilityLabel="Learn more about this purple button"
                            />
                        { error && <Text style={styles.errorText}>{ error.message }</Text>}
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