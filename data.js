export default {
  user: {
    nome: "Aluno RS/XP",
    xp: 0
  },
  jornadas: [
    {
      descricao: "Crie seu próprio Facebook",
      icone: "",
      passos: [
        {
          nome: "Nivelamento inicial",
          descricao: "Conceitos básicos e avaliação de Nível",
          conteudo: "",
          ordem: 0,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Quiz 1",
              descricao: "Descrição Quiz 1",
              xp: 10,
              feito: false,
              acertou: false,
              opts: ["op1", "op2", "op3", "op4"],
              resultado: "Resultado Quiz 1"
            }
          ]
        },
        {
          nome: "Operadores lógicos",
          descricao: "Aprenda operadores lógicos",
          conteudo:
            "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos",
          ordem: 1,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Operador &&",
              descricao: "O que faz o operador &&?",
              xp: 10,
              feito: false,
              acertou: false,
              opts: [
                "Retorna verdadeiro se ambos os operandos forem verdadeiro.",
                "Retorna falso se ambos os operandos forem verdadeiro.",
                "Retorna verdadeiro se apenas um operandor for verdadeiro.",
                "Retorna false se apenas um operandor for verdadeiro."
              ],
              resultado:
                "Retorna verdadeiro se ambos os operandos forem verdadeiro."
            }
          ]
        },
        {
          nome: "Condicionais",
          descricao: "Aprenda sobre o condicional if e else",
          conteudo:
            "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else",
          ordem: 2,
          feito: false,
          tarefas: [
            {
              tipo: "code",
              nome: "IF e Else",
              descricao:
                "Compare se a variável x é maior que 5 caso negativo verifique se é maior que 50.",
              xp: 50,
              feito: false,
              acertou: false,
              respostaRef: "",
              resultado: ""
            }
          ]
        }
      ]
    },
    {
      descricao: "Crie seu canal no Youtube",
      icone: "",
      passos: [
        {
          nome: "Nivelamento inicial",
          descricao: "Conceitos básicos e avaliação de Nível",
          conteudo: "",
          ordem: 0,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Quiz 1",
              descricao: "Descrição Quiz 1",
              xp: 10,
              feito: false,
              acertou: false,
              opts: ["op1", "op2", "op3", "op4"],
              resultado: "Resultado Quiz 1"
            }
          ]
        },
        {
          nome: "Edição de Vídeos",
          descricao: "Aprenda a editar Vídeos",
          conteudo: "",
          ordem: 1,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Editor de vídeos?",
              descricao:
                "Qual dos programas abaixo você é um editor de vídeos?",
              xp: 10,
              feito: false,
              acertou: false,
              opts: ["Excel", "Windows", "After Effects", "MS-DOS"],
              resultado: "After Effects"
            }
          ]
        }
      ]
    },
    {
      descricao: "Crie seu próprio Flapbird",
      icone: "",
      passos: [
        {
          nome: "Nivelamento inicial",
          descricao: "Conceitos básicos e avaliação de Nível",
          conteudo: "",
          ordem: 0,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Quiz 1",
              descricao: "Descrição Quiz 1",
              xp: 10,
              feito: false,
              acertou: false,
              opts: ["op1", "op2", "op3", "op4"],
              resultado: "Resultado Quiz 1"
            }
          ]
        },
        {
          nome: "Nome passo",
          descricao: "Descricao do Passo",
          conteudo: "",
          ordem: 1,
          feito: false,
          tarefas: [
            {
              tipo: "quiz",
              nome: "Quiz 1",
              descricao: "Descrição Quiz 1",
              xp: 10,
              feito: false,
              acertou: false,
              opts: ["op1", "op2", "op3", "op4"],
              resultado: "Resultado Quiz 1"
            }
          ]
        }
      ]
    }
  ]
};
