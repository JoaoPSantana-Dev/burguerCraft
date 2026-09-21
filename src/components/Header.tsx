import { Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet, Image} from "react-native"

export default function Header(){
    return(
        <View style={styles.header}>
            
            {/* View que é responsável pelo texto do app */}
            <View>
            <Text style={styles.headerTitle}>Burguer Craft</Text>
            <Text style={styles.headerDescription}>Sabor artesanal de verdade</Text>
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
        backgroundColor: "#F8F9FA"
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

    headerIcon:{
        width:44,
        height:44,
        borderRadius:22,
        backgroundColor:"#c67c4e",
        alignItems:"center",
        justifyContent:"center"
    },

    image:{
        height:44,
        width:44,
        borderRadius:22
    }


  


})