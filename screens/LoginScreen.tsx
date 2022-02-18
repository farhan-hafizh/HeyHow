import { Alert, StyleSheet } from 'react-native'
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
import auth from '../constants/FirebaseConfig';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function LoginScreen() {

  const[PasswordFocused, setPasswordFocused] = useState(false)
    const email = useRef(1)
    const password = useRef(2)
  // const [user,setUser]= useState<any>();


    const googleLogin = async() =>{
      // try {
      //   await GoogleSignin.hasPlayServices();
      //   console.log("asdasd");
      //   GoogleSignin.configure();
      //   const userInfo = await GoogleSignin.signIn();
      //   console.log(userInfo);
      // } catch (error) {
        // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //   // user cancelled the login flow
        // } else if (error.code === statusCodes.IN_PROGRESS) {
        //   // operation (e.g. sign in) is in progress already
        // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //   // play services not available or outdated
        // } else {
        //   // some other error happened
        // }
      // }
    } 
    const facebookLogin = async() =>{
    try {
      await Facebook.initializeAsync({
        appId: '490036159311365',
      });  
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API

        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        
        const userId=(await response.json()).id;

        const userData = await fetch(`https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${token}`)
        
        console.log(await userData.json());
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
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
