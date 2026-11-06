/* Cada alternativa aponta para um perfil. Os pontos são recalculados a partir
   das respostas atuais: voltar e editar nunca duplica pontos.
   Empate: aparece um resultado combinado com todos os perfis empatados. */
const perfis = {
  acolhedor: {nome:'Coração acolhedor', emoji:'💜', resumo:'Você valoriza vínculos e costuma perceber o que as pessoas ao seu redor precisam.', forca:'Escutar, aproximar pessoas e criar um ambiente de confiança.', cuidado:'Ajudar é bonito, mas você também merece cuidado. Respeite seus limites.', dica:'Separe um momento da semana para fazer algo só por você.'},
  criativo: {nome:'Espírito criativo', emoji:'✨', resumo:'Você gosta de imaginar possibilidades e expressar seu jeito único de ver o mundo.', forca:'Encontrar ideias novas e transformar experiências em inspiração.', cuidado:'Você não precisa transformar toda ideia em um projeto perfeito.', dica:'Experimente escrever, desenhar ou criar algo sem se cobrar pelo resultado.'},
  reflexivo: {nome:'Mente reflexiva', emoji:'🌙', resumo:'Você prefere observar, entender e dar significado às experiências antes de agir.', forca:'Perceber detalhes, analisar situações e fazer escolhas com intenção.', cuidado:'Nem toda escolha precisa de uma resposta perfeita antes do primeiro passo.', dica:'Escolha uma pequena ação possível hoje e permita-se aprender durante o caminho.'},
  explorador: {nome:'Alma exploradora', emoji:'🌻', resumo:'Você se anima com descobertas e tende a aprender colocando as ideias em movimento.', forca:'Tomar iniciativa, experimentar e enxergar oportunidades.', cuidado:'Entre uma novidade e outra, deixe espaço para descansar e reconhecer seus limites.', dica:'Planeje uma experiência diferente e uma pausa para aproveitar o que viveu.'}
};
const tiposEnergia = {
  companhia:{nome:'Conexão que renova',emoji:'🫶',resumo:'Você costuma recuperar o ânimo em boas conversas e momentos de companhia.',forca:'Encontrar apoio e alegria nas relações.',cuidado:'Escolha companhias com quem você possa ser você mesmo.',dica:'Combine uma conversa tranquila com alguém de confiança.'},
  quietude:{nome:'Paz na quietude',emoji:'🍃',resumo:'Seu descanso combina com silêncio, espaço pessoal e menos estímulos.',forca:'Reconhecer a importância de uma pausa.',cuidado:'Tempo sozinho pode fazer bem; mantenha também os vínculos que você valoriza.',dica:'Reserve alguns minutos sem telas, com uma música suave ou em silêncio.'},
  expressao:{nome:'Energia da expressão',emoji:'🎨',resumo:'Você se renova quando pode criar e dar forma ao que sente.',forca:'Transformar sentimentos em expressão pessoal.',cuidado:'Seu momento criativo não precisa ser produtivo nem perfeito.',dica:'Monte uma playlist, escreva livremente ou faça algo com as mãos.'},
  movimento:{nome:'Renovação em movimento',emoji:'☀️',resumo:'Mudar de ambiente e experimentar atividades costuma trazer um novo fôlego para você.',forca:'Encontrar disposição em pequenas descobertas.',cuidado:'Respeite seu ritmo e não preencha todas as pausas com atividades.',dica:'Faça um passeio curto ou experimente um caminho diferente, se puder.'}
};

function questao(texto, alternativas, ordem) {
  return {texto, opcoes: alternativas.map((texto,i)=>({texto,perfil:ordem[i]}))};
}
const quizzes = [
 {id:'personalidade',nome:'Qual é o seu jeito de ser?',emoji:'✨',descricao:'Nas amizades, nos planos e nas pequenas escolhas: descubra quais traços mais combinam com você.',perfis,perguntas:[
 questao('Seu sábado ideal teria…',['Uma boa conversa com pessoas queridas.','Tempo para criar algo do meu jeito.','Um livro, um filme ou um momento tranquilo.','Um passeio para conhecer um lugar novo.'],['acolhedor','criativo','reflexivo','explorador']),
 questao('Quando surge um desafio em grupo, você costuma…',['Analisar as opções antes de decidir.','Propor uma ideia fora do comum.','Tomar iniciativa e testar um caminho.','Ouvir todo mundo e aproximar as pessoas.'],['reflexivo','criativo','explorador','acolhedor']),
 questao('Um amigo conta que teve um dia difícil. Você…',['Pensa em algo diferente para animá-lo.','Escuta e oferece companhia.','Sugere uma atividade para mudar os ares.','Ajuda a entender o que aconteceu com calma.'],['criativo','acolhedor','explorador','reflexivo']),
 questao('O que mais chama sua atenção em uma experiência nova?',['A chance de me aventurar.','Os detalhes e o que posso aprender.','As pessoas que vou conhecer.','A inspiração que ela pode trazer.'],['explorador','reflexivo','acolhedor','criativo']),
 questao('Você recebeu uma tarde livre. Qual plano escolhe?',['Retomar um hobby criativo.','Encontrar alguém de quem sinto saudade.','Fazer algo que ainda não experimentei.','Ter tempo para pensar e organizar minhas ideias.'],['criativo','acolhedor','explorador','reflexivo']),
 questao('Para tomar uma decisão importante, você prefere…',['Entender os detalhes e comparar caminhos.','Conversar com quem confio.','Imaginar possibilidades diferentes.','Experimentar um primeiro passo.'],['reflexivo','acolhedor','criativo','explorador']),
 questao('Em um projeto, qual parte mais combina com você?',['Colocar o plano em prática.','Cuidar da colaboração entre as pessoas.','Construir um conceito original.','Pesquisar e organizar as informações.'],['explorador','acolhedor','criativo','reflexivo']),
 questao('Qual frase você escolheria para hoje?',['Quero entender melhor o que importa para mim.','Quero descobrir algo novo.','Quero estar perto de quem me faz bem.','Quero dar espaço às minhas ideias.'],['reflexivo','explorador','acolhedor','criativo'])]},
 {id:'energia',nome:'Como você recarrega sua energia?',emoji:'🍃',descricao:'Descubra o tipo de pausa que mais combina com suas preferências no dia a dia.',perfis:tiposEnergia,perguntas:[
 questao('Depois de uma semana cheia, você prefere…',['Conversar com alguém querido.','Ficar num lugar tranquilo.','Ouvir música ou criar algo.','Sair para um passeio.'],['companhia','quietude','expressao','movimento']),
 questao('Uma pausa de 20 minutos combina mais com…',['Uma caminhada leve.','Um café e uma conversa.','Um tempo sem barulho e notificações.','Rabiscar ou montar uma playlist.'],['movimento','companhia','quietude','expressao']),
 questao('Qual ambiente parece mais convidativo agora?',['Um cantinho silencioso.','Um espaço para experimentar ideias.','Uma praça ou um lugar diferente.','A casa de alguém com quem me sinto bem.'],['quietude','expressao','movimento','companhia']),
 questao('O que costuma deixar um dia mais leve para você?',['Expressar o que sinto de um jeito criativo.','Trocar experiências com alguém.','Mudar um pouco de ambiente.','Diminuir o ritmo e ter espaço pessoal.'],['expressao','companhia','movimento','quietude']),
 questao('Se pudesse escolher uma atividade agora, seria…',['Encontrar uma pessoa querida.','Conhecer um lugar novo por perto.','Ler ou descansar em silêncio.','Cozinhar, desenhar ou tocar algo por prazer.'],['companhia','movimento','quietude','expressao']),
 questao('Qual lembrete combina mais com o seu descanso?',['Posso desacelerar.','Posso criar sem cobrança.','Posso buscar uma boa companhia.','Posso descobrir algo fora da rotina.'],['quietude','expressao','companhia','movimento'])]}
];

function calcularResultado(quiz, respostas) {
 const pontos=Object.fromEntries(Object.keys(quiz.perfis).map(id=>[id,0]));
 quiz.perguntas.forEach((p,i)=>{const opcao=p.opcoes[respostas[i]];if(opcao)pontos[opcao.perfil]++;});
 const max=Math.max(...Object.values(pontos));
 return {pontos, vencedores:Object.keys(pontos).filter(id=>pontos[id]===max)};
}
const app=document.getElementById('quiz-app');
let atual=null, indice=0, escolhas=[];

function focar(){const titulo=app.querySelector('h1');titulo.tabIndex=-1;titulo.focus();}

function catalogo(){
 atual=null;
 app.innerHTML='<span class="etiqueta">DESCUBRA MAIS SOBRE VOCÊ</span><h1>Seu jeito, suas escolhas.</h1><p class="subtitulo">Não existem respostas certas. Escolha um teste e responda do seu jeito.</p><div class="catalogo"></div>';
 quizzes.forEach(q=>{const card=document.createElement('article');card.className='quiz-card';card.innerHTML=`<span class="icone">${q.emoji}</span><h2>${q.nome}</h2><p>${q.descricao}</p><small>${q.perguntas.length} perguntas · cerca de 2 minutos</small><button>Começar teste →</button>`;card.querySelector('button').onclick=()=>{atual=q;indice=0;escolhas=[];
mostrarPergunta();};
app.querySelector('.catalogo').appendChild(card);});
}

function mostrarPergunta(){
 const q=atual.perguntas[indice];
 app.innerHTML=`<button class="link" id="catalogo">← Todos os testes</button><span class="etiqueta">${atual.nome}</span><div class="progresso-info"><span>Pergunta ${indice+1} de ${atual.perguntas.length}</span><span>${Math.round(indice/atual.perguntas.length*100)}%</span></div><div class="barra" role="progressbar" aria-label="Progresso do teste" aria-valuemin="0" aria-valuemax="${atual.perguntas.length}" aria-valuenow="${indice}"><div style="width:${indice/atual.perguntas.length*100}%"></div></div><h1>${q.texto}</h1><p class="instrucao">Escolha a alternativa que mais combina com você.</p><div id="respostas" role="group" aria-label="Alternativas"></div><div class="acoes"><button class="secundario" id="voltar" ${indice===0?'disabled':''}>← Anterior</button><button id="proximo">${indice===atual.perguntas.length-1?'Ver meu resultado ✨':'Próxima →'}</button></div>`;
 q.opcoes.forEach((o,i)=>{const b=document.createElement('button');b.className='opcao';b.textContent=o.texto;b.setAttribute('aria-pressed',escolhas[indice]===i);b.classList.toggle('selecionada',escolhas[indice]===i);b.onclick=()=>{escolhas[indice]=i;
app.querySelectorAll('.opcao').forEach((el,j)=>{el.classList.toggle('selecionada',i===j);el.setAttribute('aria-pressed',i===j);});
app.querySelector('#proximo').disabled=false;};
app.querySelector('#respostas').appendChild(b);});
 app.querySelector('#proximo').disabled=escolhas[indice]===undefined;
 app.querySelector('#proximo').onclick=()=>{if(escolhas[indice]===undefined)return;if(indice<atual.perguntas.length-1){indice++;
mostrarPergunta();}else mostrarResultado();};
 app.querySelector('#voltar').onclick=()=>{if(indice>0){indice--;
mostrarPergunta();}};
 app.querySelector('#catalogo').onclick=()=>{catalogo();focar();};focar();
}

function mostrarResultado(){
 const {pontos,vencedores}=calcularResultado(atual,escolhas);
 const combinacao=vencedores.length>1;
 app.innerHTML=`<span class="etiqueta">SEU RESULTADO</span><div class="resultado-emoji">${vencedores.map(id=>atual.perfis[id].emoji).join(' ')}</div><h1>${combinacao?'Você combina diferentes jeitos':atual.perfis[vencedores[0]].nome}</h1><p class="subtitulo">${combinacao?'Suas escolhas deram o mesmo destaque aos perfis abaixo. Essa mistura também faz parte do seu jeito.':'Pelas suas escolhas neste teste, este foi o perfil que mais apareceu.'}</p><div id="perfis"></div><section class="afinidades"><h2>Como suas respostas se distribuíram</h2><p>Estas porcentagens representam apenas suas escolhas neste teste.</p><div id="distribuicao"></div></section><div class="acoes"><button id="refazer">Refazer teste</button><button id="outros" class="secundario">Explorar outros testes</button></div><a class="inicio" href="index.html">Voltar ao início</a>`;
 vencedores.forEach(id=>{const p=atual.perfis[id];
const s=document.createElement('section');s.className='perfil';s.innerHTML=`<h2>${p.emoji} ${p.nome}</h2><p>${p.resumo}</p><h3>Seu ponto forte</h3><p>${p.forca}</p><h3>Um cuidado para lembrar</h3><p>${p.cuidado}</p><h3>Experimente hoje</h3><p>${p.dica}</p>`;
app.querySelector('#perfis').appendChild(s);});
 Object.entries(pontos).sort((a,b)=>b[1]-a[1]).forEach(([id,n])=>{const pct=Math.round(n/atual.perguntas.length*100);
const row=document.createElement('div');row.className='afinidade';row.innerHTML=`<div><span>${atual.perfis[id].nome}</span><strong>${n}/${atual.perguntas.length} · ${pct}%</strong></div><div class="barra"><div style="width:${pct}%"></div></div>`;
app.querySelector('#distribuicao').appendChild(row);});
 app.querySelector('#refazer').onclick=()=>{indice=0;escolhas=[];
mostrarPergunta();};
app.querySelector('#outros').onclick=()=>{catalogo();focar();};focar();
}
const tema=document.getElementById('tema');
try{document.body.classList.toggle('dark',localStorage.getItem('tema')==='dark');}catch(error){/* O quiz funciona mesmo sem acesso ao armazenamento. */}

function atualizarTema(){tema.textContent=document.body.classList.contains('dark')?'☀️':'🌙';}
tema.onclick=()=>{document.body.classList.toggle('dark');atualizarTema();try{localStorage.setItem('tema',document.body.classList.contains('dark')?'dark':'light');}catch(error){}};
atualizarTema();
catalogo();
