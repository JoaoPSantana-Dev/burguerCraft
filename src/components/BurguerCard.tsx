import { useFonts } from "@expo-google-fonts/outfit";
import { Outfit_700Bold } from "@expo-google-fonts/outfit"
import { Inter_400Regular} from "@expo-google-fonts/inter"
import { Inter_500Medium} from "@expo-google-fonts/inter"
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type BuguerCardsProp = {
    title: string;
    description: string;
    price: string;
    image: ImageSourcePropType
}

export default function BurguerCard({title,description, price, image}: BuguerCardsProp){

      useFonts({
        Outfit_700Bold,
        Inter_500Medium,
        Inter_400Regular
      })
    
      return(
        <View style={styles.cardapioCard}>
            <Image style={styles.image} source={image}></Image>

            <View style = {styles.cardText}>
                <Text style={[styles.cardTitle,styles.outfit]}>{title}</Text>
                <Text style={[styles.cardDescription,styles.inter400]}>{description}</Text>
                <Text style={[styles.cardPrice,styles.outfit]}>{price}</Text>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    cardapioCard:{
        flexDirection:"column",
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        maxWidth:168,
        marginBlock:14,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },

        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 5,
    },

    image:{
        width: "100%",
        height: 110,
        marginBottom: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    cardText:{
        padding:14,
        textAlign:"justify",
    },

    cardTitle:{
        fontSize:16,
        fontWeight:"700",
        color:"#1E1E1E"
    },

    cardDescription:{
        fontSize:11,
        fontWeight:"400",
        color:"#6C757D"
    },

    cardPrice:{
        fontSize:15,
        fontWeight:"700",
        color:"#E65100",
        marginTop:8
    },

    outfit:{
    fontFamily: "Outfit_700Bold",
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

