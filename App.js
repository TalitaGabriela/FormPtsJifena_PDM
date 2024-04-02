import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from "react-native";

// HEADER
function Header() {
  return (
    <View style={{ display: "flex",justifyContent: "center", width: "100%", backgroundColor: "grey", alignItems: "center",}}>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
        Marcador de Pontos do JIFENA
      </Text>
    </View>
  );
}

// Início a aplicação:
export default function App() {
  return (
    <NavigationContainer>{
        <ScrollView>
          <View>

            {/* Chamando o HEADER/Navbar */}
            <View style={{ paddingHorizontal: 25, paddingTop: 45 }}>
              <Header />
            </View>

            {/* Input 1 - DIGITE O ESPORTE */}
            <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="Digite o Esporte"/>
            </View>

            {/* Escolhendo os times */}
            {/* Time 1 */}
            <Text style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}>
              Nome do Time 1:
            </Text>

            {/* Input 2 - Time 1 */}
            <View style={{ paddingHorizontal: 25 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="(Teste)"/>
            </View>

            {/* Time 2 */}
            <Text style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}>
              Nome do Time 2:
            </Text>

            {/* Input 3 - Time2 */}
            <View style={{ paddingHorizontal: 25 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="(Teste)"
              />
            </View>

            {/* Placar */}
            <Text style={{ textAlign: "center", paddingTop: 15, fontSize: 22, fontWeight: "bold",}}>
              Placar-(teste)
            </Text>

            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row",}}>
              <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>
                (Teste)
              </Text>

              <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>
                (Teste)
              </Text>
            </View>

            {/* Selecionar jogador */}
            <View>
              <Text style={{ fontSize: 20, paddingHorizontal: 25, paddingVertical: 10 }}>
                Selecione o time do jogador:
              </Text>
              {/* INCOMPLETO, FALTA A PARTE DE SELECIONAR iNFO OU AGRO */}
            </View>

            {/* Cadastrar um jogador e sua camiseta */}
            <View style={{ paddingHorizontal: 25 }}>
              <Text style={{ width: "100%", fontSize: 20 }}>
                Cadastre um jogador:
              </Text>

              {/* Input 4 - NOME DO JOGADOR */}
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }}
                placeholder="Nome do jogador"
              />

              {/* Input 5 - NUMERO DA CIMISETA */}
              <View style={{ paddingVertical: 5 }}>
                <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }}
                  placeholder="Número da camiseta do jogador"
                />
              </View>

              {/* Botão de Adicionar Jogador */}
              <Pressable>
                <Text style={{ textAlign: "center", color: "#00BFFF", fontSize: 22, paddingTop: 5}}>
                  Adicionar jogador
                </Text>
              </Pressable>
            </View>

            {/* Lista de Jogadores */}
            <View style={{ paddingHorizontal: 25 }}>
              <Text style={{ width: "100%", fontSize: 20, paddingTop: 20 }}>
                Lista de Jogadores:
              </Text>
            </View>

            
          </View>
        </ScrollView>
      }
    </NavigationContainer>
  );
}
