import { useFonts } from "@expo-google-fonts/outfit";
import { Inter_500Medium} from "@expo-google-fonts/inter"
import { StyleSheet, Text, View } from "react-native";


export default function Footer(){
      useFonts({
        Inter_500Medium
      })
    
    return(

        <View style={styles.footer}>
            <Text style={[styles.footerText,styles.inter500]}>Burger Craft • Sabor artesanal de verdade</Text>
        </View>
 
    );
}

const styles = StyleSheet.create({
      
  inter500:{
    fontFamily: "Inter_500Medium",
    fontWeight:"100"
  },

    footer:{
        marginTop:36,
        height:45,
        width:"100%",
        alignItems:"center"
    },

    footerText:{
        fontSize:11,
        fontWeight:"500",
        color:"#6C757D"
    },

    outfit:{
    fontFamily: "Outfit_800ExtraBold",
    fontWeight:"100"
  },

  
  inter400:{
    fontFamily: "Inter_400Regular",
    fontWeight:"100"
  },

  
  inter500:{
    fontFamily: "Inter_500Medium",
    fontWeight:"100"
  },
   
})