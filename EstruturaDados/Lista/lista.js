class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insert(value) {
      if (this.search(value)) {
        alert('Valor já existe na lista!');
        return;
      }
  
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.displayList();
    }
  
    remove(value) {
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentNode.value === value) {
  
          if (currentNode === this.head && currentNode === this.tail) {
            this.head = null;
            this.tail = null;
          } else if (currentNode === this.head) {
            this.head = this.head.next;
            this.head.previous = null;
          } else if (currentNode === this.tail) {
            this.tail = this.tail.previous;
            this.tail.next = null;
          } else {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
          }
  
          this.displayList();
          return;
        }
  
        currentNode = currentNode.next;
      }
  
      alert('Valor não encontrado na lista!');
    }
  
    search(value) {
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
  
        currentNode = currentNode.next;
      }
  
      return false;
    }
  
    displayList() {
      const listElement = document.getElementById('list');
      listElement.innerHTML = '';
  
      let currentNode = this.head;
  
      while (currentNode) {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `${currentNode.value}
          <button onclick="removeValue('${currentNode.value}')">Remover</button>`;
        
        listElement.appendChild(listItem);
  
        currentNode = currentNode.next;
      }
    }
  }
  

  const list = new DoublyLinkedList();
  
  function insertValue() {
    const valueInput = document.getElementById('valueInput');
    const value = valueInput.value.trim();
  
    if (value !== '') {
      list.insert(value);
      valueInput.value = '';
    }
  }
  
  function removeValue(value) {
    list.remove(value);
  }

  