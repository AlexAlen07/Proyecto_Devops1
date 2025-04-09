document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
  
    await fetch("/api/datos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
  
    alert("Nombre guardado!");
    document.getElementById("nombre").value = "";
  });
  