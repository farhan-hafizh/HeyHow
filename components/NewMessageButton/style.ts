import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

var width = Dimensions.get('window').width; // get screen width
const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        alignItems:"center", //vertical align
        justifyContent:"center", //horizontal align
        position: "absolute",
        bottom:30,
        right: 30
    }
});

export default styles;