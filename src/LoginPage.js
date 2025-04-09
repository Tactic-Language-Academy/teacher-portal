const handleLogin = async (e) => {
  e.preventDefault();
  console.log("Login attempt with:", email, password);
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful!");
    window.location.href = "/dashboard"; 
  } catch (err) {
    console.error("Login failed:", err);
    setError(err.message);
  }
};
