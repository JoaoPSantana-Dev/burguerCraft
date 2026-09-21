import BurguerCard from '@/components/BurguerCard';
import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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

            <Image style={styles.image} source={require('../../assets/hero-image.png')}>
            </Image>

            <View style={styles.houseTexts}>
              <Text style={styles.houseDestaque}>DESTAQUE DA CASA</Text>
              <Text style={styles.houseTitle}>Smash Orion Rings</Text>
              <Text style={styles.houseDescription}>Dois blends de 100g, queijo cheddar derretido e molho especial</Text>

              <View style={styles.houseFooter}>
                <Text style={styles.housePrice}>R$ 34,90</Text>

                <View style={styles.button}>
                <Ionicons name="add-outline" size={20} color="rgb(255, 255, 255)"></Ionicons>
                </View>

              </View>
            </View>
          </View>


          {/*Cardapio*/}
          <Text style={styles.cardapioTitle}>Nossos Hamburguers</Text>

          <View style={styles.cardapio}>  
          
          <BurguerCard
          title="Classic Burguer"
          description='Pão brioche, blend 160g e queijo prato'
          price='R$ 26,00'
          image={require("../../assets/classicBurguer.png")}
          />

          <BurguerCard
          title="Bacon Crispy"
          description='Blend 160g com fatias crocantes de bacon'
          price='R$ 32,00'
          image={require("../../assets/baconCrispy.png")}
          />

          <BurguerCard
          title="Chicken Crunchy"
          description='Frango empanado com maionese da casa'
          price='R$ 28,50'
          image={require("../../assets/chickenCrunchy.png")}
          />

          <BurguerCard
          title="Veggie Grill"
          description='Hambúrguer de grão de bico com cogumelos'
          price='R$ 29,90'
          image={require("../../assets/veggieGrill.png")}
          />

          </View>
          {/*Cardapio*/}

          <View>

          </View>



        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },

  content: {
    paddingHorizontal: 20
  },

  greetingSection: {
    marginBottom: 24
  },

  greetingTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#000000",
  },

  greetingSubtitle: {
    fontSize: 12,
    color: "#9b9b9b",
    marginTop: 4
  },

  houseSpecial: {
    borderRadius: 16,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  houseTexts: {
    padding: 20
  },

  houseDestaque: {
    fontWeight: "700",
    color: "#E65100",
    fontSize: 11,
    backgroundColor: "#FFF3E0",
    paddingVertical:4,
    paddingHorizontal:10,
    width: 132,
    textAlign: "center",
    borderRadius: 100,
    marginBottom: 8,
  },

  houseTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1E1E1E",
    marginBottom: 4
  },

  houseDescription: {
    fontSize: 13,
    color: "#6C757D",
    textAlign: "justify",
    fontWeight: "400"
  },

  houseFooter: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },

  housePrice: {
    fontSize: 24,
    fontFamily: "Outfit",
    color: "#E65100",
    fontWeight: "800",
  
  },

  button: {
    backgroundColor: "#E65100",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  cardapio: {
    flexDirection: "row",
    width:"100%",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginTop: 16
  },

  cardapioTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  }




})
