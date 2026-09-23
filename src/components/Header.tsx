import { useFonts } from "expo-font"
import { Outfit_800ExtraBold } from "@expo-google-fonts/outfit"
import { Inter_400Regular} from "@expo-google-fonts/inter"
import { Inter_500Medium} from "@expo-google-fonts/inter"
import { View, Text, StyleSheet, Image} from "react-native"

export default function Header(){

      useFonts({
        Outfit_800ExtraBold,
        Inter_500Medium,
        Inter_400Regular
      })
    
    return(
        <View style={styles.header}>
            
            {/* View que é responsável pelo texto do app */}
            <View>
            <Text style={[styles.headerTitle,styles.outfit]}>Burguer Craft</Text>
            <Text style={[styles.headerDescription, styles.inter500]}>Sabor artesanal de verdade</Text>
            </View>

            <Image style={styles.image} source={require("../../assets/mulher.png")}></Image>
        </View>

    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: "#F8F9FA",
    },

    headerTitle:{
        fontSize:22,
        fontWeight:"800",
        color: "#1E1E1E"
    },

    headerDescription:{
        fontSize: 12,
        color: "#6C757D",
        marginBottom:24
    },

    image:{
        height:44,
        width:44,
        borderRadius:22,
        borderColor:"#E9ECEF",
        borderWidth:2,
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