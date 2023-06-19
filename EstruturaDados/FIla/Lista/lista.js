class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    addToStart(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      this.updateList();
    }

    addToEnd(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      this.updateList();
    }

    addToMiddle(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let slow = this.head;
        let fast = this.head.next;

        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }

        newNode.next = slow.next;
        slow.next = newNode;
      }
      this.length++;
      this.updateList();
    }

    removeFromStart() {
      if (!this.head) {
        return;
      }

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.length--;
      this.updateList();
    }

    removeFromMiddle() {
      if (!this.head) {
        return;
      }

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let slow = this.head;
        let fast = this.head.next;
        let prev = null;

        while (fast && fast.next) {
          prev = slow;
          slow = slow.next;
          fast = fast.next.next;
        }

        prev.next = slow.next;
        if (slow === this.tail) {
          this.tail = prev;
        }
      }
      this.length--;
      this.updateList();
    }

    removeFromEnd() {
      if (!this.head) {
        return;
      }

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        let prev = null;

        while (current.next) {
          prev = current;
          current = current.next;
        }

        prev.next = null;
        this.tail = prev;
      }
      this.length--;
      this.updateList();
    }

    updateList() {
      const listItems = document.getElementById('listItems');
      listItems.innerHTML = '';

      let currentNode = this.head;
      while (currentNode) {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<span>${currentNode.value}</span>| ↣`;
         /*<span>${currentNode.next ? currentNode.next.value : 'null'}</span> */
        listItems.appendChild(div);

        currentNode = currentNode.next;
      }
    }
  }

  const linkedList = new LinkedList();

  function addItemAtStart() {
    const itemInput = document.getElementById('item');
    const item = itemInput.value;

    if (item !== '') {
      linkedList.addToStart(item);
      itemInput.value = '';
    }
  }

  function addItemAtEnd() {
    const itemInput = document.getElementById('item');
    const item = itemInput.value;

    if (item !== '') {
      linkedList.addToEnd(item);
      itemInput.value = '';
    }
  }

  function addItemAtMiddle() {
    const itemInput = document.getElementById('item');
    const item = itemInput.value;

    if (item !== '') {
      linkedList.addToMiddle(item);
      itemInput.value = '';
    }
  }

  function removeItemFromStart() {
    linkedList.removeFromStart();
  }

  function removeItemFromMiddle() {
    linkedList.removeFromMiddle();
  }

  function removeItemFromEnd() {
    linkedList.removeFromEnd();
  }