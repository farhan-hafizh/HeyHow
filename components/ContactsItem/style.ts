import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var width = Dimensions.get('window').width; // get screen width
const styles = StyleSheet.create({
    chat:{
        flexDirection: "row",
        width: width,
        justifyContent: "space-between",
        padding:10,
        borderBottomWidth:0.2,
        borderBottomColor: 'grey'
    },
    chatLeft:{
        flexDirection: "row"
    },
    status:{
        fontSize:16,
        color: 'grey',
        textAlignVertical: "center"
    },
    chatMessage:{
        justifyContent: "space-around",
    }
    ,
    chatUser:{
        fontWeight: "bold",
        fontSize: 16,
        justifyContent:"center",
        width:"100%"
    },
    avatar:{
        borderRadius:50,
        marginRight: 15
    },
    time:{
        color: 'grey',
        fontSize: 11
    }
});

export default styles;