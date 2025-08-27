import React from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,StatusBar,Image, Button, 
} from "react-native";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.react}>React Native</Text>
          <Text style={styles.subtitle}>Avaliação dia 27/08</Text>
        </View>
      </View>
      <View style={styles.batatas}>
        <View style={styles.retangulo}>
          <Text>Batatas são macias</Text>
        </View>
        <Button title="Enviar" />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  react: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  batatas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  retangulo: {
    borderWidth: 2,
    borderColor: '#808080',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#808080',
  },
  
});
