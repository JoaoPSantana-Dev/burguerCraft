import Header from '@/components/Header';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={30}>

    <ScrollView>
      <Header />

    {/* Conteudo */}

    {/* Destaque da Casa */}
      <View style={styles.content}>
        
        <View style={styles.greetingSection}>
        <Text style={styles.greetingTitle}>Bateu a fome?</Text>
        <Text style={styles.greetingSubtitle}>Escolha seu burguer artesanal de hoje</Text>
        </View>

        <View style={styles.houseSpecial}>

        <Image 
        style={styles.image}
        source={require('../../assets/orionBurguer.jpg')}>
        </Image>
        <Text>DESTAQUE DA CASA</Text>
        </View>


      </View>

     
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },

  content:{
    paddingHorizontal:24
  },

  greetingSection:{
    marginTop:10,
    marginBottom:24
  },

  greetingTitle:{
    fontSize:26,
    fontWeight:"800",
    color: "#000000",
  },

  greetingSubtitle:{
    fontSize:12,
    color: "#9b9b9b",
    marginTop:4
  },

  houseSpecial:{
    padding:24
  },

  image:{
    width:"100%",
    height:180,
    marginBottom: 16,
    borderRadius: 16
  }




})
