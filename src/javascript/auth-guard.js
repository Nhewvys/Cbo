firebase.auth().onAuthStateChanged(user =>{
    console.log("existe");
    
    if(!user){
      window.location.href = "index.html"
    }
  })