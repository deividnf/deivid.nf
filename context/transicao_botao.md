# Efeito de Transição do Botão — Preenchimento Progressivo Horizontal

## Objetivo

Reproduzir exatamente o efeito visual de transição do botão conforme a sequência:

1. Estado inicial: botão claro com borda.
2. Preenchimento começa da esquerda.
3. Preenchimento avança horizontalmente.
4. Botão completamente preenchido.

O efeito deve ser fluido, elegante e premium.

---

# Comportamento da Animação

## Estrutura do efeito

O botão deve ter:

- Um container principal (position: relative)
- Um pseudo-elemento interno (::before ou ::after)
- O pseudo-elemento deve ser o responsável pelo preenchimento

---

# Estado Inicial

- Fundo branco ou claro
- Borda escura fina (1px)
- Texto escuro
- Ícone escuro
- Pseudo-elemento com largura 0%
- overflow: hidden no botão
- border-radius preservado

---

# Hover (Transição)

## Animação principal

- O pseudo-elemento deve crescer da esquerda para a direita
- width: 0% → 100%
- Duração: 400ms a 600ms
- Timing: ease-in-out
- Origem: left

## Visual do preenchimento

- Cor escura elegante (ex: #1E2430 ou equivalente premium)
- Pode usar leve gradiente horizontal
- Sem brilho exagerado
- Sem efeito líquido
- Sem radial

---

# Texto e Ícone

Durante o preenchimento:

- Texto deve mudar suavemente de escuro para claro
- Ícone deve inverter cor
- Transição simultânea com o preenchimento
- Sem delay perceptível

---

# Estrutura CSS Conceitual

Button:
- position: relative
- overflow: hidden
- transition: color 0.3s ease

Pseudo-element:
- position: absolute
- left: 0
- top: 0
- height: 100%
- width: 0%
- background: cor escura premium
- transition: width 0.5s ease-in-out
- z-index: 0

Texto:
- position: relative
- z-index: 1

Hover:
- pseudo-element width: 100%
- texto color: branco

---

# Requisitos Visuais

- O preenchimento deve ser sólido, uniforme.
- Não deve parecer "barra de progresso".
- Não deve ter borda visível interna.
- Não deve ter jitter.
- Deve manter bordas arredondadas intactas.

---

# Micro-interação adicional (opcional premium)

Adicionar:

- Leve aumento de sombra ao hover
- Leve elevação (translateY(-2px))
- Muito sutil

---

# Regras Importantes

- Respeitar prefers-reduced-motion
- Garantir que o efeito funcione em desktop e mobile
- Em mobile: ativar transição ao tap (feedback imediato)
- Manter performance leve

---

# Resultado Esperado

Um botão que:

- Começa claro
- Preenche da esquerda para a direita suavemente
- Finaliza totalmente preenchido
- Inverte texto e ícone
- Transmite sofisticação e fluidez