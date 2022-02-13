import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

var width = Dimensions.get('window').width; // get screen width
const styles = StyleSheet.create({
   container:{
    padding:10
   },
   messageBox:{
    backgroundColor: "grey",
    marginRight: 50,
    padding:10,
    borderRadius:10,
   },
   userName:{
       fontWeight: "bold",
       marginBottom:5
   },
   time:{
       fontSize:12,
       marginTop:3,
    //    color: "#D1D1D1"
   } 
});

export default styles;