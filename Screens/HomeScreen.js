import React, { useEffect, useState } from 'react';
import { StatusBar, Platform, Button, TouchableOpacity, StyleSheet, Text, SafeAreaView, View, FlatList, TextInput } from 'react-native';
import ResultScreen from './ResultScreen'

  function Home(props) {
  const [yearsList, setYearsList] = useState([]);

  const renderItem = ({ item }) => (
    <View>
      <Text style={(item < 20) ? styles.textInputBlue : (item >= 20 && item <= 40) ? styles.textInputPurple : styles.textInputOrange} >{item}</Text>
    </View>
  );

  const insertOnPress = () => {
    const newYearsList = [...yearsList, years];
    setYearsList(newYearsList);
    setYears('');
  };

  const [years, setYears] = useState('');

  return (
    <>
      <StatusBar/>
      <View style={styles.container}>

        <Text style={styles.title}>Idades</Text>
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={years}
            onChangeText={text => setYears(text)}
          />
          <TouchableOpacity
            onPress={insertOnPress}
            style={styles.buttonInserir}

          >
            <Text style={styles.textInserir}>Inserir</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.box}
        >
        <FlatList
        data={yearsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        />

        </View>

        <View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResultScreen', {yearsList: yearsList})}
            style={styles.buttonCalcular}
          >
            <Text style={styles.textCalcular}>
              Calcular Média
        </Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    justifyContent: 'space-between',
    padding: 15,
  },
  textInserir: {
    color: "#353535", alignSelf: "center", fontSize: 25
  },
  textCalcular: {
    color: "#ffff", alignSelf: "center", fontSize: 25,
  },
  title: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 60,
    width: 200,
    backgroundColor: "#ffff",
    borderColor: "#030303",
    borderWidth: 1.5,
    justifyContent: "center",
    textAlign: "center"
  },
  buttonInserir: {
    width: 60,
    height: 60,
    backgroundColor: "#1ABC9C",
    borderColor: "#030303",
    borderWidth: 1.5,
    flex: 1,
    marginLeft: 5,
    justifyContent: "center",

  },
  buttonCalcular: {
    height: 60,
    width: "100%",
    backgroundColor: "#3498DB",
    borderColor: "#030303",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 20,
    

  },
  box: {
    flex: 1,
    backgroundColor: "#ffff",
    borderColor: "#030303",
    borderWidth: 1.5,
    marginTop: 30,

  },

  textInputBlue: {
    fontSize: 20,
    color: "#2BB1DB"
  },
  
  textInputPurple: {
    fontSize: 20,
    color: "#824DF2"
  },
  
  textInputOrange: {
    fontSize: 20,
    color: "#E48A1F"
  },
});
