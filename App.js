import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button
} from 'react-native';
type Props = {};

const geraFrase = () => {
 
  var numeroAleatorio = Math.floor(Math.random()*10);

  var frases = Array();
  frases[0] = '"Dizem que os homens nunca se contentam e, quando se lhes dá alguma coisa, pedem sempre um pouco mais. Dizem ainda que essa é uma das melhores qualidades da espécie e que foi ela que tornou o homem superior aos animais, que se contentam com o que têm." -A pérola, John';
  frases[1] = '“Deves ter a cabeça sempre fria, o coração sempre quente e a mão larga.” CONFÚCIO';
  frases[2] = '“Ações generosas não devem ser reprimidas por conselhos frios.” J.R.R. TOLKIEN';
  frases[3] = '“Há homens que são como as velas; sacrificam-se, queimando-se para dar luz aos outros.” PADRE ANTÓNIO VIEIRA';
  frases[4] = 'Segue o teu destino, Rega as tuas plantas, Ama as tuas rosas. O resto é a sombra De árvores alheias. Fernando Pessoa';
  frases[5] = 'Lamentar uma dor passada, no presente, é criar outra dor e sofrer novamente. William Shakespeare';
  frases[6] = 'Não se mede o valor de um homem pelas suas roupas ou pelos bens que possui, o verdadeiro valor do homem é o seu caráter, suas ideias e a nobreza dos seus ideais. Charles Chaplin';
  frases[7] = 'Duvide do brilho das estrelas. Duvide do perfume de uma flor. Duvide de todas as verdades. Mas nunca duvide do meu amor. William Shakespeare';
  frases[8] = 'Não espere por uma crise para descobrir o que é importante em sua vida. Platão';
  frases[9] = 'A única coisa tão inevitável quanto a morte é a vida. Charlie Chaplin';

  var fraseEscolhida = frases[ numeroAleatorio ];
  
  alert(fraseEscolhida);
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image source={ require('./img/logo.png')} />
          <TouchableOpacity 
          onPress={geraFrase} >
            <Text style={styles.main}>
             Clique aqui para gerar uma frase!
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    borderColor:"black",
    padding:10,
    fontSize: 20,
    color:'#FFF',
    textAlign: 'center',
    margin: 10,
    borderRadius:9,
    backgroundColor: '#145606',
    fontWeight:'bold',
    elevation:5
  },
});
