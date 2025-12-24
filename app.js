function pagar() {
    fetch("/pagar", {
      method: "POST"
    })
    .then(res => res.json())
    .then(data => {
      alert("Redirecionar para gateway de pagamento");
    });
  }
  