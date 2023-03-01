import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import React from 'react';
import CountdownTimer from './timerCount';

export default function App() {

  //creating state hooks for modal view
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);

  //body code
  return (

    <Pressable onPress={() => setModalVisible2(true)} >
    <View style={styles.container}>


      <View style={styles.topFix}>

      <Text style= {{fontSize:12, color:'white'}}>PERSONALISED PROMPT</Text>
      
      </View>
     



      <View style={styles.flexbox}>
        
        <View style={styles.forStarter}>
<Text style={{color:'white', fontSize:8}}> STORY STARTER</Text>

        </View>
        
        

        <Text style={{ marginBottom: 15, marginLeft: 15, color: 'white' }}>
          Write a story where a misunderstanding leads to bad consequences
        </Text>



        <Text
          style={{
            marginBottom:20,
            marginLeft: 15,
            fontStyle: 'italic', color: 'white'
          }}
        >
          It could be a small part of your story, or the whole plot could depend
          on it.
        </Text>



        <Pressable style={styles.button2} onPress={() => setModalVisible(true)}>
  <Text style={styles.text3}  >Read</Text>
</Pressable>

<Pressable style={styles.button3}  onPress={() => setModalVisible(true)}>
  <Text  style={styles.text3}   >Start Writing</Text>
</Pressable>




      </View>


  




      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text>This is the modal content</Text>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Modal visible={modalVisible2} animationType='fade'>
        <View style={styles.modalContainer}>
          <Text>this is for different screen</Text>
          <Button title='main' onPress={() => setModalVisible2(false)} />
        </View>
      </Modal>






      <View style={styles.leftAlign}>
  <CountdownTimer />
  <Text>  Left</Text>
</View>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 200,
  },
  flexbox: {
    marginTop: -16,
    marginRight: 20,
    marginLeft: 25,
    paddingTop: 20,
    width: 355,
    borderRadius: 6,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    
  },
  topFix: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 25,
    paddingTop: 20,
    width: 355,
    height: 50,
    borderRadius:10,
    display: 'flex',
    backgroundColor: '#5f6c81',
  },
forStarter:{
    width: 115,
    height: 20,
    backgroundColor: '#0047AB',
    color: '#fff',
    textAlignVertical:'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginBottom: 45,
    textAlign: 'center',
    borderRadius:4,
  },
  modalContainer: {

    marginTop: 200,
    backgroundColor: 'pink'
  },
  button:{
borderWidth:5,
borderColor: "pink",
},
mainBut:{
  marginTop:300,
    marginRight: 20,
    marginLeft: 25,
    alignContent: 'center',
    paddingTop: 20,
    width: 355,
    height: 80,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

},
// leftAlign: {
//   flexDirection: 'row',
//   marginRight:245,
//   alignItems: 'left',
//   justifyContent: 'flex-start',
// },

button2: {
  alignItems: 'center',
  justifyContent: 'center',
   marginTop:2,
  marginLeft: 7,
  paddingVertical: 10,
  height: '14%',
  paddingHorizontal: 32,
  width: 340,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
  
},
button3: {
  alignItems: 'center',
  justifyContent: 'center',
   marginTop:2,
  marginLeft: 7,
  paddingVertical: 10,
  height: '14%',
  paddingHorizontal: 32,
  width: 340,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'pink',
  
},


text3: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},

});

