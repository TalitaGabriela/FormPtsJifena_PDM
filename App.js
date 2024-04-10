import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity} from "react-native";

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
  // Definindo estados para os diferentes valores no aplicativo
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [jogadores, setJogadores] = useState([]);
  const [selecao, setSelecao] = useState(null);
  const [nome, setNome] = useState('');
  const [camiseta, setCamiseta] = useState('');
  const [placarT1, setPlacarT1] = useState(0);
  const [placarT2, setPlacarT2] = useState(0);

  // Função para adicionar um jogador
  const addJogador = (nome, camiseta) => {
    // Verifica se o time foi selecionado e se o nome ou número do jogador estão vazios
    if (selecao === null || nome.trim() === '' || camiseta.trim() === '') {
      return;
    }
    // Cria um novo jogador com os dados fornecidos
    const novoJogador = { nome, camiseta, pontos: 0 };
    // Atualiza o estado dos jogadores adicionando o novo jogador
    setJogadores([...jogadores, novoJogador]);
    setNome('');
    setCamiseta('');
  };

   // Função para incrementar os pontos de um jogador
   const addPontos = (index) => {
    // Copia a lista de jogadores para atualização
    const attJogadores = [...jogadores];
    // Acessa o jogador atual
    const nome = attJogadores[index];
    // Incrementa os pontos do jogador atual
    nome.pontos++;
    // Atualiza o placar do time correspondente
    if (selecao === 1) {
      setPlacarT1(placarT1 + 1);
    } else if (selecao === 2) {
      setPlacarT2(placarT2 + 1);
    }
    // Atualiza o estado dos jogadores
    setJogadores(attJogadores);
  };


  return ( 
        <ScrollView>
          <View>

            {/* Chamando o HEADER/Navbar */}
            <View style={{ paddingHorizontal: 25, paddingTop: 45 }}>
              <Header />
            </View>

            {/* Input 1 - DIGITE O ESPORTE */}
            <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }} value={esporte}
                placeholder="Digite o Esporte"/>
            </View>

            {/* Escolhendo os times */}
            {/* Time 1 */}
            <Text style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}>
              Nome do Time 1:
            </Text>

            {/* Input 2 - Time 1 */}
            <View style={{ paddingHorizontal: 25 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }} value={time1}
                placeholder="(Teste)"/>
            </View>

            {/* Time 2 */}
            <Text style={{ width: "100%", paddingHorizontal: 25, fontSize: 28 }}>
              Nome do Time 2:
            </Text>

            {/* Input 3 - Time2 */}
            <View style={{ paddingHorizontal: 25 }}>
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }} value={time2}
                placeholder="(Teste)"
              />
            </View>

            {/* Placar */}
            <Text style={{ textAlign: "center", paddingTop: 15, fontSize: 22, fontWeight: "bold",}}>
              Placar-{esporte}
            </Text>

            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row",}}>
              <Text style={{ paddingHorizontal: 25, fontSize: 20 }}> value={placarT1}
                {placarT1}
              </Text>

              <Text style={{ paddingHorizontal: 25, fontSize: 20 }}> value={placarT2}
                {placarT2}
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
              <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }} value={nome}
                placeholder="Nome do jogador"
              />

              {/* Input 5 - NUMERO DA CAMISETA */}
              <View style={{ paddingVertical: 5 }}>
                <TextInput style={{ height: 30, width: "100%", borderWidth: 1 }} value={camiseta}
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

            <StatusBar style="light" />
          </View>
        </ScrollView>
  );
}
