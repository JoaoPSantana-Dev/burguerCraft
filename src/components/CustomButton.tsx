import { TouchableOpacity, StyleSheet, Text } from "react-native";

type CustomButtonProps={
    title:string;
    onPress: ()=>void;
};

export default function CustomButton({title, onPress}:CustomButtonProps){

    return(
         <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>

    );


}

const styles = StyleSheet.create({

    button:{
    width:"100%",
    backgroundColor:"#E65100",
    borderRadius:24,
    paddingVertical:16,
    alignItems:"center",
    marginTop:16
  },

  buttonText:{
    fontSize:15,
    fontWeight:"700",
    color:"#ffffff",  
    textAlign:"center"
  },

})
