const storageKey = 'stock-keeper-items';
const form = document.getElementById('stockForm');
const itemNameInput = document.getElementById('itemName');
const categoryInput = document.getElementById('category');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const tableBody = document.getElementById('stockTableBody');
const submitBtn = document.getElementById('submitBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');

const totalItemsEl = document.getElementById('totalItems');
const totalQuantityEl = document.getElementById('totalQuantity');
const lowStockCountEl = document.getElementById('lowStockCount');
const outOfStockCountEl = document.getElementById('outOfStockCount');

let items = loadItems();
let editingId = null;

function loadItems() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function getStatus(quantity) {
  if (quantity <= 0) return 'out-of-stock';
  if (quantity <= 5) return 'low-stock';
  return 'in-stock';
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function getFilteredItems() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;

  return items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm);
    const matchesStatus = status === 'all' || item.status === status;
    return matchesSearch && matchesStatus;
  });
}

function renderTable() {
  const filteredItems = getFilteredItems();

  if (!filteredItems.length) {
    tableBody.innerHTML = '<tr><td colspan="6">No stock items found.</td></tr>';
    return;
  }

  tableBody.innerHTML = filteredItems
    .map(
      (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(item.price)}</td>
          <td><span class="status-pill ${item.status}">${formatStatus(item.status)}</span></td>
          <td>
            <button type="button" class="secondary" data-action="edit" data-id="${item.id}">Edit</button>
            <button type="button" class="delete" data-action="delete" data-id="${item.id}">Delete</button>
          </td>
        </tr>
      `
    )
    .join('');
}

function formatStatus(status) {
  switch (status) {
    case 'low-stock':
      return 'Low Stock';
    case 'out-of-stock':
      return 'Out of Stock';
    default:
      return 'In Stock';
  }
}

function renderSummary() {
  const totalItems = items.length;
  const totalQuantity = items.reduce((sum, item) => sum + Number(item.quantity), 0);
  const lowStockCount = items.filter((item) => item.status === 'low-stock').length;
  const outOfStockCount = items.filter((item) => item.status === 'out-of-stock').length;

  totalItemsEl.textContent = totalItems;
  totalQuantityEl.textContent = totalQuantity;
  lowStockCountEl.textContent = lowStockCount;
  outOfStockCountEl.textContent = outOfStockCount;
}

function resetForm() {
  form.reset();
  editingId = null;
  submitBtn.textContent = 'Add Item';
  cancelEditBtn.classList.add('hidden');
}

function render() {
  renderSummary();
  renderTable();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newItem = {
    id: editingId || crypto.randomUUID(),
    name: itemNameInput.value.trim(),
    category: categoryInput.value.trim(),
    quantity: Number(quantityInput.value),
    price: Number(priceInput.value),
    status: getStatus(Number(quantityInput.value)),
  };

  if (!newItem.name || !newItem.category || Number.isNaN(newItem.quantity) || Number.isNaN(newItem.price)) {
    return;
  }

  if (editingId) {
    items = items.map((item) => (item.id === editingId ? { ...item, ...newItem } : item));
  } else {
    items.push(newItem);
  }

  saveItems();
  render();
  resetForm();
});

cancelEditBtn.addEventListener('click', resetForm);

searchInput.addEventListener('input', renderTable);
statusFilter.addEventListener('change', renderTable);

tableBody.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const { action, id } = button.dataset;

  if (action === 'delete') {
    items = items.filter((item) => item.id !== id);
    saveItems();
    render();
    if (editingId === id) resetForm();
  }

  if (action === 'edit') {
    const item = items.find((entry) => entry.id === id);
    if (!item) return;

    editingId = item.id;
    itemNameInput.value = item.name;
    categoryInput.value = item.category;
    quantityInput.value = item.quantity;
    priceInput.value = item.price;
    submitBtn.textContent = 'Update Item';
    cancelEditBtn.classList.remove('hidden');
  }
});

render();
