import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, ScrollView, Switch, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {

  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  return (
    <View>
     
      <Text style={[styles.title]}>Application pour le suivie de bébé</Text>

      
      <MaterialCommunityIcons name="baby" size={24} color="black" />
      <Text onPress={()=>{alert("Coucou");}}><MaterialCommunityIcons name="human-baby-changing-table" size={24} color="black" /></Text>
      <TouchableOpacity 
        onPress={()=>{
          console.log("coucou");
          alert("Coucou");}
        }
      >
        <Text style={[styles.title]}>Bébé a manger à quelle heure</Text>
        <MaterialCommunityIcons name="baby-bottle-outline" size={24} color="black" />
      </TouchableOpacity>
      <MaterialCommunityIcons name="sleep" size={24} color="black" />
      <TextInput
        style={{ height: 44, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
      />
     
      <TextInput
        style={{height: 100, borderColor: "gray", borderWidth: 1, marginBottom: 10}}
        placeholder="Description"
        multiline={true}
        textAlignVertical="top"
        onChangeText={(text) => {
          setDescription(text);
        }}
        value={description}
      />

      <TextInput
        style={{height: 44, borderColor: "gray", borderWidth: 1, marginBottom: 10}}
        placeholder="Phone"
        keyboardType="numeric"
        onChangeText={(text) => {
          setPhone(text);
        }}
        value={phone}
      />

      <TextInput
        style={{height: 44, borderColor: "gray", borderWidth: 1}}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      { isEnabled ? <Ionicons name="md-checkmark-circle" size={32} color="green" /> : <AntDesign name="carryout" size={24} color="black" /> }
     
     <Switch
       trackColor={{false: '#767577', true: '#81b0ff'}}
       thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
       ios_backgroundColor="#3e3e3e"
       onValueChange={toggleSwitch}
       value={isEnabled}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

/*
<View style={styles.container}>
      <Text>Alice</Text>
      <Text>Ma fille</Text>
      <StatusBar style="auto" />
    </View>


*/

/*
 <ScrollView>
      <View style={{ height: 400, backgroundColor: "crimson" }}></View>
      <View style={{ height: 400, backgroundColor: "pink" }}></View>
      <View style={{ height: 400, backgroundColor: "salmon" }}></View>
      <View style={{ height: 400, backgroundColor: "white" }}></View>
      <View style={{ height: 400, backgroundColor: "deeppink" }}></View>
    </ScrollView>


    <Button title="tyuu" onPress={()=>{alert("Coucou");}}>
        <Ionicons name="human-baby-changing-table" size={24} color="black" />
      </Button>
*/