import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { useFonts, ReenieBeanie_400Regular } from '@expo-google-fonts/reenie-beanie';

// Importe as fontes do Google Fonts
import { useFonts as useGoogleFonts } from 'expo-font';
import {
  Sarabun_400Regular,
  BalsamiqSans_400Regular,
  Lora_400Regular,
  ChauPhilomeneOne_400Regular,
  SeymourOne_400Regular,
  Lobster_400Regular,
  OpenSans_400Regular,
  PressStart2P_400Regular,
  Ubuntu_400Regular,
  Nabla_400Regular,
  Poppins_400Regular,
  SourceSansPro_400Regular,
  DaysOne_400Regular,
  MedievalSharp_400Regular
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    ReenieBeanie_400Regular
  });

  let [googleFontsLoaded] = useGoogleFonts({
    Sarabun_400Regular,
    BalsamiqSans_400Regular,
    Lora_400Regular,
    SeymourOne_400Regular,
    ChauPhilomeneOne_400Regular,
    PressStart2P_400Regular,
    Lobster_400Regular,
    Nabla_400Regular,
    OpenSans_400Regular,
    Ubuntu_400Regular,
    Poppins_400Regular,
    SourceSansPro_400Regular,
    DaysOne_400Regular,
    MedievalSharp_400Regular
  });

  if (!fontsLoaded || !googleFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.box}>
        <Text style={styles.TextoComFonte1}>
          Transformação doi mas vale a pena - Profº Silvio
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte2}>
          Acredite que você pode e você já está no meio do caminho - Theodore Roosevelt
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte3}>
          O único modo de fazer um excelente trabalho é amar o que você faz - Steve Jobs
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte4}>
          A persistência é o caminho do êxito - Charlie Chaplin
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte5}>
          O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, terá   sucesso - Albert Schweitzer
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte6}>
          O que você consegue alcançar é uma porção menor do que o que você pode alcançar. - Zig Ziglar
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte7}>
          A vida é realmente simples, mas insistimos em torná-la complicada - Confúcio
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte8}>
          A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente antes que a cortina se feche e a peça termine sem aplausos - Charles Chaplin
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte9}>
          Você não pode voltar atrás e mudar o começo, mas pode começar onde está e mudar o final - C.S. Lewis
        </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.TextoComFonte10}>
          A vida é uma sucessão de momentos para serem desfrutados, não sobrevividos - D. H. Lawrence
        </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:8,
    backgroundColor:'#9900cc'
  },
  TextoComFonte1: {
    margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'Sarabun_400Regular'
  },
  TextoComFonte2: {
    margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'BalsamiqSans_400Regular' 
  },
  TextoComFonte3: {
   margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'ChauPhilomeneOne_400Regular' 
  },
  TextoComFonte4: {
    margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'SeymourOne_400Regular' 
  },
  TextoComFonte5: {
    margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'Lobster_400Regular'
  },
  TextoComFonte6: {
   margin:24,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'PressStart2P_400Regular' 
  },
  TextoComFonte7: {
    margin:24,
    fontSize:21,
    textAlign:'center',
    fontFamily:'Nabla_400Regular',
  },
  TextoComFonte8: {
    margin:24,
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'Poppins_400Regular'
  },
  TextoComFonte9: {
   margin:24,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'SourceSansPro_400Regular'
  },
  TextoComFonte10: {
   margin:24,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'MedievalSharp_400Regular'
  },
  box:{
    width:350,
    height:175,
    borderRadius:35,
    backgroundColor:'#d24dff',
    margin:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#39004d',
    borderWidth:5,
  },
});
// import { Text, SafeAreaView, StyleSheet,ScrollView,View } from 'react-native';

// import { useFonts, ReenieBeanie_400Regular } from '@expo-google-fonts/reenie-beanie';
// import { useFonts as useGoogleFonts } from 'expo-font';
// import {
//   Sarabun_400Regular,
//   Montserrat_400Regular,
//   Lora_400Regular,
//   Raleway_400Regular,
//   Lobster_400Regular,
//   OpenSans_400Regular,
//   Ubuntu_400Regular,
//   Poppins_400Regular,
//   SourceSansPro_400Regular,
// } from '@expo-google-fonts/dev';


// export default function App() {

//   let [googleFontsLoaded] = useGoogleFonts({
//     Sarabun_400Regular,
//     Montserrat_400Regular,
//     Lora_400Regular,
//     Raleway_400Regular,
//     Lobster_400Regular,
//     OpenSans_400Regular,
//     Ubuntu_400Regular,
//     Poppins_400Regular,
//     SourceSansPro_400Regular,
//   });

//   if(!fontsLoaded && !fontError)
//   {
//     return null;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//     <ScrollView>
//       <Text style={styles.Titulo}>
//         Transformação doi mas vale a pena - Profº Silvio
//       </Text>
//       <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         Acredite que você pode e você já está no meio do caminho - Theodore Roosevelt
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         O único modo de fazer um excelente trabalho é amar o que você faz - Steve Jobs
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         A persistência é o caminho do êxito - Charlie Chaplin
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o   que faz, terá sucesso - Albert Schweitzer
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         O que você consegue alcançar é uma porção menor do que o que você pode alcançar. - Zig Ziglar
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         A vida é realmente simples, mas insistimos em torná-la complicada - Confúcio
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente antes que a cortina se feche e a peça termine sem aplausos - Charles Chaplin
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         Você não pode voltar atrás e mudar o começo, mas pode começar onde está e mudar o final - C.S. Lewis
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         A vida é uma sucessão de momentos para serem desfrutados, não sobrevividos - D. H. Lawrence
//       </Text>
//        <View style={{flex: 1, height: 5, backgroundColor: 'black' , fontSize:30,  width:389,}} />
//       <Text style={styles.Titulo}>
//         A vida é muito curta para ser pequena - Benjamin Disraeli
//       </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: ' #00802b',
//     padding: 8,
//   },
//   Titulo: {
//     margin: 24,
//     fontSize: 38,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontFamily:'ReenieBeanie_400Regular'
//   },
// });
