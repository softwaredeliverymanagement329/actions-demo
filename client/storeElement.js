class StoreElement extends HTMLElement {
  constructor() {
    self = super();

    this.createAddStoreButton();
    this.createAddInput();
    this.createStoreTable();
  }

  createAddStoreButton() {
    const addBtn = self.appendChild(document.createElement('button'));
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', (e) => {
      const storeName = addStoreInput.value;
      fetch(`/api/store/${storeName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => this.drawTable(data));
    });
  }

  createAddInput() {
    const addStoreInput = self.appendChild(document.createElement('input'));
    addStoreInput.setAttribute('type', 'text');
    addStoreInput.setAttribute('placeholder', 'store name');
  }

  createStoreTable() {
    const storeTable = self.appendChild(document.createElement('table'));

    const headerRow = storeTable.appendChild(document.createElement('tr'));
    const nameHeader = headerRow.appendChild(document.createElement('th'));
    nameHeader.innerText = 'Name';
    const dateHeader = headerRow.appendChild(document.createElement('th'));
    dateHeader.innerText = 'Date';

    this.tableBody = storeTable.appendChild(document.createElement('tbody'));
  }

  getStores() {
    fetch('/api/store')
      .then((res) => res.json())
      .then((data) => drawTable(data));
  }

  drawTable(data) {
    this.tableBody.innerHTML = '';
    data.store.forEach((s) => {
      const rowEl = document.createElement('tr');
      const nameEl = document.createElement('td');
      nameEl.innerText = s.name;
      const dateEl = document.createElement('td');
      dateEl.innerText = s.date;
      rowEl.appendChild(nameEl);
      rowEl.appendChild(dateEl);
      this.tableBody.appendChild(rowEl);
    });
  }
}

customElements.define('action-store', StoreElement);
