import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

// HEADER
function Header() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "grey",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>
        Marcador de Pontos do JIFENA
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {
        <ScrollView>
          <View>
            {/* Chamando o HEADER/Navbar */}
            <View style={{ paddingHorizontal: 25, paddingTop: 45 }}>
              <Header />
            </View>

            {/* Input 1 - O esporte a ser jogado */}
            <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
              <TextInput
                style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="Digite o Esporte"
              />
            </View>

            {/* Escolhendo os times */}
            {/* Time 1 */}
            <Text
              style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}
            >
              Nome do Time 1:
            </Text>
            {/* Input 2 - Time1 */}
            <View style={{ paddingHorizontal: 25 }}>
              <TextInput
                style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="(Teste)"
              />
            </View>


             {/* Time 2 */}
             <Text
              style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}
            >
              Nome do Time 2:
            </Text>
            {/* Input 3 - Time2 */}
            <View style={{ paddingHorizontal: 25}}>
              <TextInput
                style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="(Teste)"
              />
            </View>


            {/* Placar */}
            <Text style={{textAlign:"center", paddingTop:15, fontSize:22, fontWeight:"bold"}}>Placar-(teste)</Text>



          </View>
        </ScrollView>
      }
    </NavigationContainer>
  );
}
