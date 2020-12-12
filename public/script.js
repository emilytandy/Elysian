var firebaseConfig = {
    apiKey: "AIzaSyBiluBoJXmqZXuG7gWlx33rlk59F7WwQbI",
    authDomain: "elysiankit-ffb0b.firebaseapp.com",
    projectId: "elysiankit-ffb0b",
    storageBucket: "elysiankit-ffb0b.appspot.com",
    messagingSenderId: "810447818358",
    appId: "1:810447818358:web:d945e7cbaf57b8167e9957",
    measurementId: "G-SWSVHC5RF2"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var show = document.getElementById('Data');
var table = document.getElementById("table");
window.onload = getData();

function writeData() {
    database.ref(document.getElementById("IDField").value).set({
        ID: document.getElementById("IDField").value,
        Name: document.getElementById("NameField").value,
        Stock: document.getElementById("StockField").value
    });
    getData();
}
function getData() {
    database.ref('/').on("value", function(snapshot) {
        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        snapshot.forEach(function(userSnapshot) {
            var userKey = userSnapshot.key;
            var userData = userSnapshot.val();
            var newRow = table.insertRow(table.length);
            var cell = newRow.insertCell(0);
            cell.innerHTML = userData['ID'];
            var cell = newRow.insertCell(1);
            cell.innerHTML = userData['Name'];
            var cell = newRow.insertCell(2);
            cell.innerHTML = userData['Stock'];
        })
    });
}
function updateData() {
    var IDField = document.getElementById("IDFieldUpdate").value;
    var userKey;
    var userData;
    database.ref(IDField).on("value", function(snapshot) {
        userKey = snapshot.key;
        userData = snapshot.val();
    });
    database.ref(IDField).set({
        ID: userData['ID'],
        Name: userData['Name'],
        Stock: document.getElementById("StockFieldUpdate").value
    });
}
function removeData() {
    database.ref(document.getElementById("IDFieldDelete").value).remove();
}
function showAddData() {
    const input = document.getElementById("input");
    input.innerHTML = '';
    const temp = document.getElementById("addData");
    const clon = temp.content.cloneNode(true);
    input.appendChild(clon);
}
function showUpdateData() {
    const input = document.getElementById("input");
    input.innerHTML = '';
    const temp = document.getElementById("updateData");
    const clon = temp.content.cloneNode(true);
    input.appendChild(clon);
}
function showRemoveData() {
    const input = document.getElementById("input");
    input.innerHTML = '';
    const temp = document.getElementById("removeData");
    const clon = temp.content.cloneNode(true);
    input.appendChild(clon);
}