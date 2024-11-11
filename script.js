function submitForm() {
    alert('Wait for a moment.. your data will be displayed soon...');
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const noTelepon = document.getElementById('noTelepon').value;
    const email = document.getElementById('email').value;
    const tipeKamar = document.getElementById('tipeKamar').value;
    const jumlahKamar = document.getElementById('jumlahKamar').value;
    const nomorKamar = document.getElementById('nomorKamar').value;
    const tanggalCheckIn = document.getElementById('tanggalCheckIn').value;
    const tanggalCheckOut = document.getElementById('tanggalCheckOut').value;
    const pembayaran = document.querySelector('input[name="pembayaran"]:checked').value;

    const table = document.getElementById('guestTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const rowIndex = table.rows.length;

    newRow.innerHTML = `
        <td>${rowIndex}</td>
        <td>${nama}</td>
        <td>${alamat}</td>
        <td>${noTelepon}</td>
        <td>${email}</td>
        <td>${nomorKamar}</td>
        <td>${jumlahKamar}</td>
        <td>${tipeKamar}</td>
        <td>${tanggalCheckIn}</td>
        <td>${tanggalCheckOut}</td>
        <td>${pembayaran}</td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    document.getElementById('checkInForm').reset();
}

function editRow(button) {

    
    const row = button.parentNode.parentNode;
    alert('Editing row...');
    document.getElementById('nama').value = row.cells[1].innerText;
    document.getElementById('alamat').value = row.cells[2].innerText;
    document.getElementById('noTelepon').value = row.cells[3].innerText;
    document.getElementById('email').value = row.cells[4].innerText;
    document.getElementById('tipeKamar').value = row.cells[7].innerText;
    document.getElementById('jumlahKamar').value = row.cells[6].innerText;
    document.getElementById('nomorKamar').value = row.cells[5].innerText;
    document.getElementById('tanggalCheckIn').value = row.cells[8].innerText;
    document.getElementById('tanggalCheckOut').value = row.cells[9].innerText;
    const pembayaran = row.cells[10].innerText;
    document.querySelector(`input[name="pembayaran"][value="${pembayaran}"]`).checked = true;

    row.parentNode.removeChild(row);
}

function deleteRow(button) {
    confirm('Are you sure to delete this?');
    alert('Deleting the row...')
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateRowIndices();
}

function updateRowIndices() {
    const rows = document.querySelectorAll('#guestTable tbody tr');
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });
}

function searchFunction() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('guestTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const nomorKamar = rows[i].cells[5].innerText.toLowerCase();
        if (nomorKamar.includes(searchValue)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}


function sortTable(order) {
    const table = document.getElementById("guestTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));

    rows.sort((rowA, rowB) => {
        const nameA = rowA.cells[1].textContent.toLowerCase();
        const nameB = rowB.cells[1].textContent.toLowerCase();

        if (order === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    rows.forEach(row => tbody.appendChild(row));
}
