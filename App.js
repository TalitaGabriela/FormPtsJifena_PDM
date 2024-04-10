import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity} from "react-native";

// HEADER
function Header() {
  return (
    <View
      style={{display: "flex", justifyContent: "center", width: "100%", backgroundColor: "grey", alignItems: "center"}}>
      <Text
        style={{color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center"}}>
        Marcador de Pontos do JIFENA
      </Text>
    </View>
  );
}

// Início a aplicação:
export default function App() {
  // Definindo estados para os diferentes valores no aplicativo
  const [esporte, setEsporte] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [jogadores, setJogadores] = useState([]);
  const [selecao, setSelecao] = useState(null);
  const [nome, setNome] = useState("");
  const [camiseta, setCamiseta] = useState("");
  const [placarT1, setPlacarT1] = useState(0);
  const [placarT2, setPlacarT2] = useState(0);

  // Função para adicionar um jogador
  const addJogador = () => {
    if (selecao === null || nome.trim() === "" || camiseta.trim() === "") {
      return;
    }

    const novoJogador = { nome, camiseta, pontos: 0 };
    setJogadores([...jogadores, novoJogador]);
    setNome("");
    setCamiseta("");
  };

  // Função para incrementar os pontos de um jogador
  const addPontos = (index) => {
    const attJogadores = [...jogadores];
    const jogador = attJogadores[index];
    jogador.pontos++;

    if (selecao === 1) {
      setPlacarT1(placarT1 + 1);
    } else if (selecao === 2) {
      setPlacarT2(placarT2 + 1);
    }
    setJogadores(attJogadores);
  };

  // Estrutura do aplicativo
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 25 }}>
        {/* Chamando o HEADER/Navbar */}
        <View style={{ paddingTop: 45 }}>
          <Header />
        </View>


        {/* Input 1 - DIGITE O ESPORTE */}
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ width: "100%", fontSize: 28 }}>
            Escolha o Esporte:
          </Text>
          <TextInput
            style={{ height: 35, width: "100%", borderWidth: 1 }}
            value={esporte}
            onChangeText={setEsporte}
            placeholder="Digite o Esporte"
          />
        </View>


        {/* Escolhendo os times */}
        {/* Time 1 */}
        <View>
          <Text style={{ width: "100%", fontSize: 28 }}>Nome do Time 1:</Text>
          <TextInput
            style={{ height: 35, width: "100%", borderWidth: 1 }}
            value={time1}
            onChangeText={setTime1}
            placeholder="Nome do Time 1"
          />
        </View>

        {/* Time 2 */}
        <View>
          <Text style={{ width: "100%", fontSize: 28 }}>Nome do Time 2:</Text>
          <TextInput
            style={{ height: 35, width: "100%", borderWidth: 1 }}
            value={time2}
            onChangeText={setTime2}
            placeholder="Nome do Time 2"
          />
        </View>


        {/* Placar */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.label}>Placar - {esporte}</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.teamName}>{time1}</Text>
            <Text style={styles.teamPoints}>{placarT1}</Text>
            <Text style={styles.teamPoints}> : </Text>
            <Text style={styles.teamPoints}>{placarT2}</Text>
            <Text style={styles.teamName}>{time2}</Text>
          </View>
        </View>

        {/* Selecionar jogador */}
        <View>
          <Text style={{ marginBottom: 5, width: "100%", fontSize: 28 }}>
            Selecione o time do jogador:
          </Text>

          <View style={{ flexDirection: "row" }}>
            {/* Botão 1 - time 1 */}
            <Pressable
              style={[styles.teamButton, selecao === 1 && styles.selecao]}
              onPress={() => setSelecao(1)}
            >
              <Text style={styles.teamButtonText}>{time1}</Text>
            </Pressable>

            {/* Botão 2 - time 2 */}
            <Pressable
              style={[styles.teamButton, selecao === 2 && styles.selecao]}
              onPress={() => setSelecao(2)}
            >
              <Text style={styles.teamButtonText}>{time2}</Text>
            </Pressable>
          </View>
        </View>

        {/* Cadastrar um jogador e sua camiseta */}
        <View style={{ paddingHorizontal: 25, paddingVertical: 25 }}>
          <Text style={{ width: "100%", fontSize: 22 }}>
            Cadastre um jogador:
          </Text>

          {/* Input 4 - NOME DO JOGADOR */}
          <TextInput
            style={{ height: 30, width: "100%", borderWidth: 1 }}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome do jogador"
          />

          {/* Input 5 - NUMERO DA CAMISETA */}
          <View style={{ paddingVertical: 5 }}>
            <TextInput
              style={{ height: 30, width: "100%", borderWidth: 1 }}
              value={camiseta}
              onChangeText={setCamiseta}
              placeholder="Número da camiseta do jogador"
            />
          </View>

          {/* Botão de Adicionar Jogador */}
          <Pressable style={styles.addButton} onPress={addJogador}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 22,
                paddingTop: 5,
                fontWeight: "bold",
              }}
            >
              Adicionar jogador
            </Text>
          </Pressable>
        </View>

        {/* Seção para exibir a lista de jogadores */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.label}>Lista de Jogadores:</Text>
          {/* Mapeia os jogadores e renderiza cada um */}
          {jogadores.map((jogadores, index) => (
            <View key={index} style={styles.playerItem}>
              <Text>
                {jogadores.nome} - {jogadores.camiseta}
              </Text>
              
              {/* Botão para incrementar pontos do jogador */}
              <Pressable onPress={() => addPontos(index)}>
                <Text style={styles.incrementButton}>+</Text>
              </Pressable>
              <Text>{jogadores.pontos} pontos</Text>
            </View>
          ))}
        </View>

        <StatusBar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  teamName: {
    fontSize: 18,
  },
  teamPoints: {
    fontSize: 24,
    fontWeight: "bold",
  },

  teamButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  teamButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  selecao: {
    backgroundColor: "#2196F3",
  },

  addButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    alignItems: "center",
  },

  playerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  incrementButton: {
    backgroundColor: "#2196F3",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});
