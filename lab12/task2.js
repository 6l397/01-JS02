
const inventoryData = [
    { name: 'Стіл', price: 100, quantity: 2 },
    { name: 'Стіл кухонний', price: 150, quantity: 1 },
    { name: 'Стілець', price: 50, quantity: 3 },
    { name: 'Шкаф книжковий', price: 200, quantity: 1 },
  ];
  
  function renderInventoryTable() {
    const tableBody = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    inventoryData.forEach((item) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.price * item.quantity}</td>
      `;
    });
    updateTotalAmount();
  }
  
  function renderSelectOptions() {
    const selectElement = document.getElementById('item-select');
    selectElement.innerHTML = '<option value="">Виберіть товар</option>';
    inventoryData.forEach((item, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = item.name;
      selectElement.appendChild(option);
    });
  }
  
  function updateTotalAmount() {
    const totalAmount = inventoryData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById('total-amount').textContent = totalAmount;
  }
  
  document.getElementById('update-btn').addEventListener('click', () => {
    const selectedItemIndex = parseInt(document.getElementById('item-select').value, 10);
    if (selectedItemIndex!== -1) {
      const updateQuantity = parseInt(document.getElementById('update-quantity').value, 10);
      const updatePrice = parseInt(document.getElementById('update-price').value, 10);
      inventoryData[selectedItemIndex].quantity = updateQuantity;
      inventoryData[selectedItemIndex].price = updatePrice;
      renderInventoryTable();
    }
  });

  renderInventoryTable();
  renderSelectOptions();
  