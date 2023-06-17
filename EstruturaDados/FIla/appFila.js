    const queueContainer = document.getElementById('queue-container');
    const itemInput = document.getElementById('item-input');
    const queue = [];

    function updateQueueUI() {
      queueContainer.innerHTML = '';
      for (let i = 0; i < queue.length; i++) {
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.innerText = queue[i];
        queueContainer.appendChild(item);
      }
    }

    function enqueue() {
      const newItem = itemInput.value;
      if (newItem !== '') {
        queue.push(newItem);
        itemInput.value = '';
        updateQueueUI();
      }
    }

    function dequeue() {
      if (queue.length > 0) {
        queue.shift();
        updateQueueUI();
      }
    }