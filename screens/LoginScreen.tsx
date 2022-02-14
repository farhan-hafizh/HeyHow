import { StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'
import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import colors from '../constants/Colors';
import * as Animatabel from 'react-native-animatable';
import Style from '../constants/Style';
import * as Facebook from 'expo-facebook';

import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import useGoogleAuth from '../hooks/useGoogleAuth';
import app from '../constants/FirebaseConfig';

export default function LoginScreen() {

  const[PasswordFocused, setPasswordFocused] = useState(false)
    const email = useRef(1)
    const password = useRef(2)

    const googleLogin = () =>{
      const user =useGoogleAuth(new GoogleAuthProvider());
      // const provider = new GoogleAuthProvider();

      
    } 
    const facebookLogin = async() =>{
      try {
        const auth = getAuth(app);

        await Facebook.initializeAsync('490036159311365'); // enter your Facebook App Id 
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
          // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTH
          const credential = FacebookAuthProvider.credential(token);
          signInWithPopup(auth,credential)
            .then(user => { // All the details about user are in here returned from firebase
              console.log('Logged in successfully', user)
            })
            .catch((error) => {
              console.log('Error occurred ', error)
            });
        } else {
          // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
    } 

  return (
    <View style={style.container}>
      <View>
                <View>
                    <TextInput style={style.input} placeholder='Email'ref={email}/>
                </View>
                <View style={[style.input,style.password]}>    
                    <Animatabel.View animation={PasswordFocused?"":"fadeInLeft"} duration={400}>
                            <Icon
                                name= "lock"
                                iconStyle= {{color: colors.grey3}}
                                /> 
                    </Animatabel.View>
                    
                    <TextInput 
                    ref={password} 
                    secureTextEntry={true} 
                    style={{width:"80%"}} 
                    placeholder='Password'
                    onFocus={()=>{
                        setPasswordFocused(false)
                    }}
                    onBlur={()=>{
                        setPasswordFocused(true)
                    }}
                    />
                   
                    <Animatabel.View animation={PasswordFocused?"":"fadeInLeft"} duration={400}>
                            <Icon
                                name= "visibility-off"
                                iconStyle= {{color: colors.grey3}}
                                style={{marginRight:10}}
                                /> 
                    </Animatabel.View>
                </View>
            </View>
            <View style={{marginHorizontal:20,marginVertical:20}}>
                <Button
                title='SIGN IN' 
                buttonStyle = {Style.styleButton}
                titleStyle = {Style.buttonTitle}
                onPress={()=>{
                    // navigation.navigate('DrawerNavigator')
                }}
                />
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{...style.textGrey,textDecorationLine:"underline"}}>Forgot Password?</Text>
            </View>
            <View style={{alignItems:"center",marginTop:30,marginBottom:30}}>
                <Text style={{fontSize:20,fontWeight:"bold", color:"black"}}>OR</Text>
            </View>
            <View>
                <SocialIcon
                 title="Sign In With Facebook"
                 button
                 type="facebook"
                 style={style.SocialIcon}
                 onPress={()=>{
                   facebookLogin();
                 }}/>
                <SocialIcon
                 title="Sign In With Google"
                 button
                 type="google"
                 style={style.SocialIcon}
                 onPress={()=>{
                   googleLogin();
                 }}/>
            </View>
            <View style={{marginTop:40,marginHorizontal:20}}>
                <Text>New on HeyHow?</Text>
                <Button
                title="Create a New Account"
                buttonStyle={style.createAccount}
                titleStyle={style.createAccountTitle}
                />
            </View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    padding:10
},
textGrey:{
    color:colors.light.background,
    fontSize:16
},
title:{
    marginTop:10, 
    marginLeft:20,
    marginBottom:20
},
input:{
    borderWidth:1,
    borderColor:"grey",
    marginHorizontal:20,
    borderRadius: 12,
    marginBottom:20,
    height:50,
    padding:5
},
password:{
    borderWidth:1,
    borderColor:"grey",
    marginHorizontal:20,
    borderRadius: 12,
    paddingLeft:15,
    justifyContent:"space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems:"center"
},
SocialIcon:{
    marginHorizontal:20,
    borderRadius:12,
    height:50
},
createAccount:{
    borderRadius:12,
    backgroundColor:"white",
    borderColor:colors.light.tint,
    borderWidth:1,
    height:40,
    paddingHorizontal:40,
    justifyContent:"center",
    alignContent:"center",
},
createAccountTitle:{
    color: colors.light.tint
}
})
