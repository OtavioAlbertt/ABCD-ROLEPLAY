// =================== CONFIG ===================
const ADMIN_PASS = "1822br";
const STORAGE_KEY = "fabRegistros";

// =================== LOGINS DOS MEMBROS ===================
const MEMBER_LOGINS = {
  "Maj. Luke": "Comando Geral",
  "1° Sgt. Albert": "Comandante",
  "2° Sgt. Carolina": "Subcomandante",
  "1° Ten. Prendel": "Piloto",
  "Cap. Vallote": "Piloto"
};

// =================== DADOS DOS GUERREIROS ===================
const warriorDetails = {
  "Maj. Luke": {
    image: "MajorDADOS.jpg",
    role: "Comando Geral",
    description: "Maj. Luke é o líder supremo da Força Aérea Brasileira, um estrategista nato com décadas de experiência em operações aéreas. Sua carreira começou nas bases militares, onde demonstrou excepcional habilidade em liderança e tomada de decisões críticas. Como Comando Geral, Maj. Luke coordena todas as operações da FAB, garantindo que o espaço aéreo brasileiro esteja sempre protegido e que a instituição continue evoluindo com honra e excelência."
  },
  "1° Sgt. Albert": {
    image: "SargentoDADOS.png",
    role: "Comandante",
    description: "1° Sgt. Albert é o Comandante operacional da FAB, responsável pela execução diária das missões. Sua trajetória é marcada por coragem e dedicação, tendo participado de inúmeras operações que protegeram o território brasileiro. Albert vive pela máxima 'Servir com honra', garantindo que cada missão seja executada com precisão e que a FAB mantenha sua reputação de excelência operacional."
  },
  "2° Sgt. Carolina": {
    image: "CarolDADOS.png",
    role: "Subcomandante",
    description: "2° Sgt. Carolina é a Subcomandante da FAB, uma líder inspiradora que quebrou barreiras no mundo militar. Sua inteligência estratégica e capacidade de liderança a tornaram uma referência na instituição. Carolina acredita que a força da FAB vem da união e diversidade de seus membros, trabalhando incansavelmente para manter a coesão e o alto padrão da instituição."
  },
  "1° Ten. Prendel": {
    image: "PrendelDADOS.png",
    role: "Piloto",
    description: "1° Ten. Prendel é um piloto de elite da FAB, com milhares de horas de voo e participação em missões críticas. Sua habilidade nos céus é lendária, tendo salvado vidas e protegido o território brasileiro inúmeras vezes. Prendel vive pelos céus, onde encontra sua verdadeira vocação. Cada voo é uma oportunidade de servir ao Brasil e demonstrar a superioridade aérea da FAB."
  },
  "Cap. Vallote": {
    image: "ValloteDADOS.png",
    role: "Piloto",
    description: "Cap. Vallote é um veterano piloto da FAB, com experiência em diversos tipos de aeronaves e missões. Sua carreira é marcada por lealdade, coragem e um profundo amor pela aviação militar brasileira. Vallote representa a tradição da FAB, transmitindo conhecimentos e valores para as novas gerações de guerreiros dos céus brasileiros."
  }
};

// =================== LOCALSTORAGE ONLY ===================
// All Supabase functions have been removed. Using localStorage only.

// =================== LOCALSTORAGE FUNCTIONS ===================

// Carregar dados iniciais - apenas inicializar localStorage se vazio
function loadInitialData() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
  if (!localStorage.getItem('aeronaves')) {
    localStorage.setItem('aeronaves', JSON.stringify([]));
  }
}

// Função salvar alistamento local
function salvarInscricao(data) {
  const inscricoes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  inscricoes.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscricoes));
}

// Função salvar aeronave local
function salvarAeronave(data) {
  const aeronaves = JSON.parse(localStorage.getItem('aeronaves')) || [];
  aeronaves.push(data);
  localStorage.setItem('aeronaves', JSON.stringify(aeronaves));
}

// Função carregar alistamentos
function carregarInscricoes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Função carregar aeronaves
function carregarAeronaves() {
  return JSON.parse(localStorage.getItem('aeronaves')) || [];
}

// Função deletar alistamento
function deletarInscricao(index) {
  const inscricoes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  inscricoes.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscricoes));
}

// Função deletar aeronave
function deletarAeronave(index) {
  const aeronaves = JSON.parse(localStorage.getItem('aeronaves')) || [];
  aeronaves.splice(index, 1);
  localStorage.setItem('aeronaves', JSON.stringify(aeronaves));
}



// =================== DADOS DAS UNIDADES ===================
const unitDetails = {
  "Comando da Aeronáutica": {
    image: "ComandodaAeronautica.jpg",
    description: "O Comando da Aeronáutica é o órgão máximo da Força Aérea Brasileira, responsável pela direção geral das atividades aéreas e pela defesa nacional. Ele coordena todas as operações e estratégias da FAB.",
    area: "Defesa Nacional e Coordenação Geral",
    functions: [
      "Direção estratégica das operações aéreas",
      "Coordenação de defesa nacional",
      "Gestão de políticas e regulamentações aéreas",
      "Representação internacional da FAB"
    ],
    additional: "Localizado em Brasília, o Comando da Aeronáutica é liderado pelo Comandante da Aeronáutica, que responde diretamente ao Ministério da Defesa."
  },
  "Comando-Geral de Operações Aéreas": {
    image: "Comando-GeraldeOperações Aereas.jpg",
    description: "Responsável por coordenar todas as operações aéreas da FAB, incluindo missões de defesa, transporte, combate e missões especiais.",
    area: "Operações Aéreas e Defesa",
    functions: [
      "Coordenação de missões de combate e defesa aérea",
      "Gestão de transporte aéreo militar",
      "Execução de missões especiais e de resgate",
      "Controle de tráfego aéreo militar"
    ],
    additional: "Opera em conjunto com outras unidades para garantir a segurança do espaço aéreo brasileiro e o apoio às operações terrestres."
  },
  "Comando-Geral de Apoio": {
    image: "Comando-Geral de Apoio.jpg",
    description: "Fornece suporte logístico essencial para todas as operações da FAB, incluindo manutenção de aeronaves, infraestrutura e suprimentos.",
    area: "Logística e Infraestrutura",
    functions: [
      "Manutenção e reparo de aeronaves",
      "Gestão de infraestrutura aeroportuária",
      "Suprimento de materiais e equipamentos",
      "Suporte logístico para operações"
    ],
    additional: "Garante que todas as unidades da FAB tenham os recursos necessários para cumprir suas missões de forma eficiente."
  },
  "Comando-Geral de Pessoal": {
    image: "Comando-Geral de Pessoal.jpg",
    description: "Gerencia os recursos humanos da FAB, incluindo recrutamento, treinamento, promoção e bem-estar dos militares.",
    area: "Recursos Humanos e Treinamento",
    functions: [
      "Recrutamento e seleção de pessoal",
      "Treinamento e capacitação profissional",
      "Gestão de carreiras e promoções",
      "Programas de bem-estar e saúde"
    ],
    additional: "Responsável por manter um quadro de pessoal altamente qualificado e motivado para as diversas funções da FAB."
  },
  "Comando-Geral de Tecnologia Aeroespacial": {
    image: "Comando-Geral de Tecnologia Aeroespacial.jpg",
    description: "Desenvolve e integra tecnologias avançadas para aeronaves, sistemas de defesa e inovação aeroespacial.",
    area: "Pesquisa, Desenvolvimento e Tecnologia",
    functions: [
      "Desenvolvimento de novas tecnologias aeroespaciais",
      "Pesquisa em defesa e aviação",
      "Integração de sistemas avançados",
      "Inovação em materiais e equipamentos"
    ],
    additional: "Colabora com instituições civis e militares para avançar o conhecimento aeroespacial brasileiro."
  },
  "Para-Sar": {
    image: "Para-Sar.jpg",
    description: "Unidade especializada em operações de busca e salvamento, resgate em áreas remotas e evacuação aeromédica.",
    area: "Busca, Salvamento e Resgate",
    functions: [
      "Operações de busca e salvamento (SAR)",
      "Resgate em áreas de difícil acesso",
      "Evacuação aeromédica de emergência",
      "Treinamento em técnicas de resgate"
    ],
    additional: "Opera 24/7 para responder a emergências em todo o território brasileiro, incluindo regiões remotas e oceânicas."
  }
};

// Carregar dados iniciais ao iniciar
loadInitialData();

// =================== MODAL DE LOGIN ===================
document.addEventListener("DOMContentLoaded", () => {
  const choiceModal = document.getElementById('choiceModal');
  const modal = document.getElementById('loginModal');
  const btnEntrar = document.getElementById('btnEntrar');
  const btnAdmin = document.getElementById('btnAdmin');
  const btnVisitante = document.getElementById('btnVisitante');
  const closeBtns = document.getElementsByClassName('close');
  const loginConfirm = document.getElementById('loginConfirm');

  // Modal removido - não mostrar mais

  if (btnEntrar) {
    btnEntrar.onclick = function() {
      if (modal) modal.style.display = 'block';
    }
  }

  if (closeBtns) {
    for (let i = 0; i < closeBtns.length; i++) {
      closeBtns[i].onclick = function() {
        if (modal) modal.style.display = 'none';
      }
    }
  }

  if (window) {
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == choiceModal) {
        choiceModal.style.display = 'none';
      }
    }
  }

  if (loginConfirm) {
    loginConfirm.onclick = function() {
      const login = document.getElementById('loginUser').value;
      const password = document.getElementById('loginPassword').value;
      if (login === 'admin' && password === '1822br') {
        sessionStorage.setItem('adminAuth', 'true');
        window.location.href = 'registro-aeronaves.html';
      } else if (MEMBER_LOGINS[login] && password === MEMBER_LOGINS[login]) {
        sessionStorage.setItem('memberAuth', login);
        window.location.href = 'registro-aeronaves.html';
      } else {
        alert('Login ou senha incorretos!');
      }
      document.getElementById('loginUser').value = '';
      document.getElementById('loginPassword').value = '';
    }
  }

  // Permitir login com Enter
  const loginPassword = document.getElementById('loginPassword');
  if (loginPassword) {
    loginPassword.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        if (loginConfirm) loginConfirm.click();
      }
    });
  }

  // =================== MODAL DE DETALHES DAS UNIDADES ===================
  const unitModal = document.getElementById('unitModal');
  const unitModalClose = document.getElementById('unitModalClose');

  if (unitModalClose) {
    unitModalClose.onclick = function() {
      if (unitModal) unitModal.style.display = 'none';
    }
  }

  if (window) {
    window.onclick = function(event) {
      if (event.target == unitModal) {
        unitModal.style.display = 'none';
      }
    }
  }

  // Adicionar event listeners aos cards das unidades
  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach(card => {
    card.addEventListener('click', function() {
      const unitName = this.querySelector('h3').textContent.trim();
      const details = unitDetails[unitName];
      if (details) {
        document.getElementById('unitImage').src = details.image;
        document.getElementById('unitTitle').textContent = unitName;
        document.getElementById('unitDescription').textContent = details.description;
        document.getElementById('unitArea').textContent = details.area;
        const functionsList = document.getElementById('unitFunctions');
        functionsList.innerHTML = '';
        details.functions.forEach(func => {
          const li = document.createElement('li');
          li.textContent = func;
          functionsList.appendChild(li);
        });
        document.getElementById('unitAdditional').textContent = details.additional;
        if (unitModal) {
          unitModal.classList.add('unit-modal');
          unitModal.style.display = 'block';
        }
      }
    });
  });

  // =================== FORMULÁRIO (FAÇA PARTE) ===================
  const form = document.getElementById("formInscricao");
  const notif = document.getElementById("notifOverlay");
  const notifClose = document.getElementById("notifClose");
  const btnSair = document.getElementById("btnSair");
  const tabela = document.getElementById("tabelaInscricoes")?.querySelector("tbody");

  // ========= FORM SUBMIT =========
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = {
        nome: form.querySelector("#nome").value.trim(),
        idade: form.querySelector("#idade").value.trim(),
        documento: form.querySelector("#documento").value.trim(),
        telefone: form.querySelector("#telefone").value.trim(),
        email: form.querySelector("#email").value.trim(),
        area: form.querySelector("#area").value,
        motivo: form.querySelector("#motivo").value,
        descricao: form.querySelector("#descricao")?.value.trim() || ""
      };
      salvarInscricao(data);

      // Mostra notificação de sucesso
      if (notif) {
        notif.classList.add("show");
        notif.querySelector("h4").textContent = "Alistamento enviado!";
      }
      form.reset();
    });
  }

  // ========= FECHAR NOTIF =========
  if (notifClose) {
    notifClose.addEventListener("click", () => notif.classList.remove("show"));
  }

  // ========= SAIR (PAINEL ADMIN) =========
  if (btnSair) {
    btnSair.addEventListener("click", () => {
      sessionStorage.removeItem("adminAuth");
      sessionStorage.removeItem("memberAuth");
      localStorage.removeItem("visitorMode");
      window.location.href = "index.html";
    });
  }

  // =================== MODAL DE DETALHES DA PÁGINA INICIAL ===================
  const homeModal = document.getElementById('homeModal');
  const homeModalClose = document.getElementById('homeModalClose');

  if (homeModalClose) {
    homeModalClose.onclick = function() {
      if (homeModal) homeModal.style.display = 'none';
    }
  }

  if (window) {
    window.onclick = function(event) {
      if (event.target == homeModal) {
        homeModal.style.display = 'none';
      }
    }
  }

  // Adicionar event listeners aos cards da página inicial
  const homeInfoCards = document.querySelectorAll('.info-card');
  homeInfoCards.forEach(card => {
    card.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const title = this.querySelector('h3').textContent.trim();
      const description = this.querySelector('p').textContent.trim();

      document.getElementById('homeImage').src = imgSrc;
      document.getElementById('homeDescription').textContent = description;
      if (homeModal) {
        homeModal.classList.add('home-modal');
        homeModal.style.display = 'block';
      }
    });
  });



  // ========= VERIFICAR LOGIN =========
  if (window.location.pathname.includes("admin.html")) {
    if (sessionStorage.getItem("adminAuth") !== "true") {
      window.location.href = "index.html";
      return;
    }

    carregarAeronavesAdmin();

    function carregarInscricoesAdmin() {
      tabela.innerHTML = "";
      const inscricoes = carregarInscricoes();
      inscricoes.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.nome}</td>
          <td>${item.idade}</td>
          <td>${item.documento}</td>
          <td>${item.telefone}</td>
          <td>${item.email}</td>
          <td>${item.area}</td>
          <td>${item.motivo}</td>
          <td>${item.descricao}</td>
          <td><button class="btn-apagar" data-index="${index}">Excluir</button></td>
        `;
        tabela.appendChild(tr);
      });

      // Eventos de exclusão
      document.querySelectorAll(".btn-apagar").forEach(btn => {
        btn.addEventListener("click", e => {
          const index = e.target.dataset.index;
          if (confirm("Tem certeza que deseja excluir este registro?")) {
            deletarInscricao(index);
            carregarInscricoesAdmin();
          }
        });
      });
    }

    function carregarAeronavesAdmin() {
      const container = document.getElementById("aeronavesContainer");
      container.innerHTML = "";
      const aeronaves = carregarAeronaves();
      aeronaves.forEach((aeronave, index) => {
        const item = document.createElement("div");
        item.className = "aeronave-item";
        item.innerHTML = `
          <p><strong>Prefixo:</strong> ${aeronave.prefixo}</p>
          <p><strong>Modelo:</strong> ${aeronave.modelo}</p>
          <p><strong>Categoria:</strong> ${aeronave.categoria}</p>
          <p><strong>Proprietário:</strong> ${aeronave.proprietario}</p>
          <p><strong>Data de Registro:</strong> ${aeronave.dataRegistro}</p>
          <p><strong>Situação:</strong> ${aeronave.situacao}</p>
          ${aeronave.foto ? `<img src="${aeronave.foto}" alt="Foto da Aeronave" style="max-width: 200px; max-height: 150px; margin: 10px 0;">` : ''}
          <button class="btn-apagar" onclick="deletarAeronaveAdmin(${index})">Excluir</button>
        `;
        container.appendChild(item);
      });
    }

    // Função para deletar aeronave no admin
    window.deletarAeronaveAdmin = function(index) {
      if (confirm("Tem certeza que deseja excluir esta aeronave?")) {
        deletarAeronave(index);
        carregarAeronavesAdmin();
      }
    };
  }

  // =================== CARD LATERAL DOS GUERREIROS ===================
  // Adicionar event listeners aos membros da hierarquia
  const membros = document.querySelectorAll('.membro');
  membros.forEach(membro => {
    membro.addEventListener('click', function() {
      const name = this.querySelector('p strong').textContent.trim();
      const details = warriorDetails[name];
      if (details) {
        const card = document.getElementById('warriorCard');
        document.getElementById('warriorImage').src = details.image;
        document.getElementById('warriorName').textContent = name;
        document.getElementById('warriorRole').textContent = details.role;
        document.getElementById('warriorDescription').textContent = details.description;
        if (card) {
          card.style.display = 'block';
        }
      }
    });
  });
});
