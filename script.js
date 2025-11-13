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

// =================== LOCALSTORAGE ONLY ===================
// All Supabase functions have been removed. Using localStorage only.

// =================== LOCALSTORAGE FUNCTIONS ===================

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

// =================== MODAL DE LOGIN ===================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('loginModal');
  const btnEntrar = document.getElementById('btnEntrar');
  const closeBtns = document.getElementsByClassName('close');
  const loginConfirm = document.getElementById('loginConfirm');

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
      window.location.href = "index.html";
    });
  }

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
});
