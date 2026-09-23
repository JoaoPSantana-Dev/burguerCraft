import { useFonts} from "expo-font"
import { Outfit_800ExtraBold } from "@expo-google-fonts/outfit"
import { Inter_400Regular} from "@expo-google-fonts/inter"
import { Inter_500Medium} from "@expo-google-fonts/inter"
import { Inter_700Bold} from "@expo-google-fonts/inter"
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';
import BurguerCard from '@/components/BurguerCard';
import Header from '@/components/Header';



export default function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  useFonts({
    Outfit_800ExtraBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold
  })

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage("Por favor, informe seu nome!");
    } else {
      setMessage(`  Olá, ${name}! Pedido recebido.`);
    }
    
    setName('');

  }

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
            <Text style={[styles.greetingTitle,styles.outfit]}>Bateu a fome?</Text>
            <Text style={[styles.greetingSubtitle,styles.inter400]}>Escolha seu burguer artesanal de hoje</Text>
          </View>

          <View style={styles.houseSpecial}>

            <Image style={styles.image} source={require('../../assets/hero-image.png')}>
            </Image>

            <View style={styles.houseTexts}>
              <Text style={[styles.houseDestaque,styles.inter700]}>DESTAQUE DA CASA</Text>
              <Text style={[styles.houseTitle,styles.outfit]}>Smash Duplo Cheddar</Text>
              <Text style={[styles.houseDescription,styles.inter400]}>Dois blends de 100g, queijo cheddar derretido e molho especial</Text>

              <View style={styles.houseFooter}>
                <Text style={[styles.housePrice,styles.outfit]}>R$ 34,90</Text>

                <View style={styles.button}>
                  <Ionicons name="add-outline" size={20} color="rgb(255, 255, 255)"></Ionicons>
                </View>

              </View>
            </View>
          </View>
          {/* Destaque da Casa */}


          {/*Cardapio*/}
          <Text style={[styles.cardapioTitle, styles.outfit]}>Nossos Burguers</Text>

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


          {/* Realizar Pedidos*/}
          <View style={styles.orderSection}>
            <Text style={[styles.orderQuestion,styles.outfit]}>Como podemos de chamar?</Text>
            <Text style={[styles.orderDescription,styles.inter400]}>Insira seus dados para agilizar sua retirada ou entrega</Text>

            <TextInput
              style={[styles.input,styles.inter500]}
              placeholder='Digite o seu nome'
              value={name}
              onChangeText={setName}
            ></TextInput>

            <CustomButton

              title="Fazer meu pedido"
              onPress={handleOrder}

            />

            {message !== '' && (

              <View style={styles.message}>
                <Image height={20} width={20} source={require('../../assets/sinalConfirmacao.png')}></Image>
                <Text style={styles.messageText}>
                  {message}
                </Text>
              </View>
            )}
          </View>
          
          {/* Realizar Pedidos*/}

          <Footer/>

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

  inter700:{
    fontFamily: "Inter_700Bold",
    fontWeight:"100"
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
    color: "#E65100",
    fontSize: 11,
    backgroundColor: "#FFF3E0",
    paddingVertical: 4,
    paddingHorizontal: 10,
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
    width: "100%",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginTop: 16
  },

  cardapioTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },

  orderSection: {
    marginTop: 32,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 24,

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
  },


  orderQuestion: {
    fontSize: 18,
    fontWeight: 800,
    color: "#1E1E1E"
  },

  orderDescription: {
    fontSize: 12,
    fontWeight: 400,
    color: "#6C757D",
    marginBottom: 16
  },

  input: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E9ECEF",
    backgroundColor: "#F1F3F5",

    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "500",
    color: "#6C757D",
  },

  message: {
    width: "100%",
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    marginTop: 16,
    height: 44,
    paddingHorizontal:16,
    
    flexDirection: "row",
    alignItems: "center",
  },

  messageText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
  }



})
