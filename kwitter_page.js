const firebaseConfig = {
    apiKey: "AIzaSyCssiSjMZufwFcVH4crAwHAwyehKT_QiHE",
    authDomain: "kwitterproject-a0869.firebaseapp.com",
    databaseURL: "https://kwitterproject-a0869-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-a0869",
    storageBucket: "kwitterproject-a0869.appspot.com",
    messagingSenderId: "196128794246",
    appId: "1:196128794246:web:3ba8e2821dfb06763a1307"
  };
  
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("userName");

  function sendMessage()
  {
    msg = document.getElementById("message").value; 
    firebase.database().ref(room_name).push({ 
          name:user_name, 
          message:msg, 
          like:0 
    });
    document.getElementById("message").value = ""; 

}