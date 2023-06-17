class Pilha {
	constructor() {
	  this.items = [];
	}
  
	push(element) {
		if(element != "") {
	  	this.items.push(element);
		}
	}	
  
	pop() {
	  if (this.items.length === 0) {
		return "Underflow";
	  }
	  return this.items.pop();
	}
  
	peek() {
	  return this.items[this.items.length - 1];
	}
  
	isEmpty() {
	  return this.items.length === 0;
	}
  
	size() {
	  return this.items.length;
	}
  
	clear() {
	  this.items = [];
	}
  
	print() {
	  console.log(this.items.toString());
	}
  }
let pilha = new Pilha();
let divPilha = document.querySelector('.pilha');

function atualizarPilha() {
    divPilha.innerHTML = '';
  for (let i = pilha.size() - 1; i >= 0 ; i--) {
    let divElemento = document.createElement('div');
    divElemento.innerText = pilha.items[i];
    divPilha.appendChild(divElemento);
  }
}
function empilhar() {
  var valor = document.getElementById("valor").value;
  pilha.push(valor);
	atualizarPilha();	
  document.getElementById("valor").value = "";
}

function desenpilhar() {
  pilha.pop();
  atualizarPilha();
}

function limpar() {
  pilha.clear();
  atualizarPilha();
}
function EnpilharAleatório() {
  pilha.push(Math.round(Math.random() * 999));
  atualizarPilha();
}
function voltar() {
	window.location.href="../index.html";
}