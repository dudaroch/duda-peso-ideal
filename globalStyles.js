import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
    alignSelf:'center',
    marginTop:20
  },
 
  title: {
    
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
  },
  texto: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#fff',
    opacity: 1
  },
  viewInput: {
    flexDirection: 'row',
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    width: 160,
    height: 40,
  },
  image: {
    flex: 1,

  },
  vidro:{
    backgroundColor:"rgba(0, 0, 0, 0.500)",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical:20,
    width: 300,
    height: 325,
    justifyContent: 'center',
  },
  textoSimples:{
    color: "#fff",
    fontSize: 15,
    paddingTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  input:{
    width:"100%",
    paddingLeft: 5,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
  },
  botao:{
    width: '50%', 
    backgroundColor: "#298DC7",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    alignItems: "center",
    justifyContent: 'center',

  },
  botao2:{
    width: '50%', 
    backgroundColor: "#ff69b4",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: 'center',
  },
  mulher:{
    color: "#ffcbdb",
    paddingLeft: 4,
    fontWeight: "bold",
  },
  homem:{
    color: "#add8e6",
    paddingRight: 4,
    fontWeight: "bold",
  },
});
