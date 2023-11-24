import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View,Switch, TextInput, Image, ImageBackground } from 'react-native';
import styles from './globalStyles';

// http://conversorfacil.com.br/calcular/peso-ideal
import imagem1 from './assets/men.png'
import imagem2 from './assets/woman.png'

export default function App() {
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(false);
  const [peso,setPeso] = useState('');
  const [imagem, setImagem] = useState('');

  const calcular = (altura,sexo,peso,imagem) => {
    if(sexo == false){
      let h = parseInt(altura)
      setPeso((( h - 100 ) - [ ( h - 150 ) / 4 ]) + "Kg")
    } else if(sexo == true){
      let h = parseInt(altura)
      setPeso((( h - 100 ) - [ ( h - 150 ) / 2 ])+ "Kg" )
    };
    // if(sexo==false){
    //   setImagem(imagem1)
    // } else if(sexo == true){
    //   setImagem(imagem2)
    // };
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={!sexo ? imagem1 : imagem2} resizeMode="cover" style={{width: '100%', height: "100%"}}>
      <View style={styles.content}>
        <View style={styles.vidro}>
        <Text style={styles.title}>Peso ideal</Text>
        <Text style={styles.textoSimples}>Altura</Text>
        <View style={styles.viewInput}>
          <TextInput
          value={altura}
          onChangeText={setAltura}
          style={styles.input}
          keyboardType='numeric'
          returnKeyType='done'
          />
        </View>
        <View style={{display: "flex", flexDirection: "row",  alignItems: "center", justifyContent: "center", padding: 15,}}>
          <Text style={styles.homem}>Homem</Text>
          <Switch
                trackColor={{ false: '#b1deef', true: '#ffcbdb' }}
                thumbColor={sexo ? '#ff69b4' : '#298DC7'}
                ios_backgroundColor="#298DC7"
                onValueChange={setSexo}
                value={sexo}
          />
          <Text style={styles.mulher}>Mulher</Text>
        </View>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Pressable
            style={!sexo ? styles.botao : styles.botao2}
            onPress={() => calcular(altura, sexo, peso, imagem)}
          >
            <Text style={{color: "#fff", fontWeight: "bold"}}>
              Calcular
            </Text>
          </Pressable>
          <View style={{alignItems:"center", justifyContent: "center", paddingTop: 15,}}><Text style={{color: "#fff", fontWeight:"bold"}}>O peso ideal é: {`${peso}`}</Text></View>
        </View>
        <StatusBar style="auto" />
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}
