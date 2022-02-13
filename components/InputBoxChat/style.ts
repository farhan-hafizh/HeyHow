import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

var width = Dimensions.get('window').width; // get screen width
const styles = StyleSheet.create({
   container:{
    padding:5,
    flexDirection: "row",
    marginBottom:20,
    alignItems: "flex-end"
   },
   icon:{
       backgroundColor: Colors.light.tint,
       padding:5,
       width:50,
       height:50,
       borderRadius: 50,
       justifyContent: "center",
       alignItems:"center"
   },
   inputBox:{
       backgroundColor: "white",
       flexDirection:"row",
       alignItems: "flex-end",
       padding: 10,
       borderRadius:15,
       flex: 1, // take all space left
       marginRight:10
   },
   textInput:{
       flex:1,
       marginHorizontal: 10,
       textAlignVertical: 'top'
   },
   attachIcon:{
       marginRight:5
   }
});

export default styles;