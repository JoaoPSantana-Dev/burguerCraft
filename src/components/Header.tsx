import { Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet} from "react-native"

export default function Header(){
    return(
        <View style={styles.header}>
            
            {/* View que é responsável pelo texto do app */}
            <View>
            <Text style={styles.headerTitle}>Burguer Craft</Text>
            <Text style={styles.headerDescription}>Sabor artesanal de verdade</Text>
            </View>

            <View style={styles.headerIcon}>
                <Ionicons name="person" size={25} color="rgb(20, 14, 11)"></Ionicons>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: "#F5DEB3"
    },

    headerTitle:{
        fontSize:18,
        fontWeight:"800",
        color: "#2f2d2c"
    },

    headerDescription:{
        fontSize: 12,
        color: "#9b9b9b",
        marginTop:4
    },

    headerIcon:{
        width:44,
        height:44,
        borderRadius:22,
        backgroundColor:"#c67c4e",
        alignItems:"center",
        justifyContent:"center"
    }


  


})