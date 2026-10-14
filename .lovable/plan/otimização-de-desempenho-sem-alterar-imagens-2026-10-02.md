# Otimização de desempenho sem alterar imagens

## Objetivo
Melhorar a nota e a capacidade de resposta da landing page sem modificar arquivos, caminhos, atributos, prioridades ou componentes de imagens, e sem perder rastreamento ou conversões.

## Diagnóstico atual
- Medir uma linha de base mobile e desktop em condições reproduzíveis.
- Separar custos do código da página, animações contínuas, renderizações React, fontes e scripts externos.
- Preservar integralmente imagens e tracking; CSS só será removido quando comprovadamente sem uso.

## Implementação
- Reduzir JavaScript próprio desnecessário e evitar atualizações React repetidas fora da área visível.
- Carregar comportamento secundário apenas quando sua seção estiver próxima da tela.
- Trocar animações contínuas em JavaScript por alternativas mais leves quando mantiverem o comportamento atual.
- Adiar trabalho de terceiros para ociosidade/interação sem remover pixels, eventos ou IDs.
- Aplicar cache e compressão somente por configuração suportada pela plataforma, sem alterar mídia.

## Validação
- Comparar Lighthouse antes/depois, informando ambiente e métricas reais.
- Testar a página em celular e desktop, incluindo links, FAQ, cronômetros e carrossel.
- Confirmar que todas as imagens existentes continuam visíveis e que suas URLs não retornam erros.
- Não prometer nota 90 caso o limite restante dependa de imagens ou scripts externos indispensáveis.
