document.getElementById('notasForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Evita recargar la página

      const n1 = parseFloat(document.getElementById('nota1').value);
      const n2 = parseFloat(document.getElementById('nota2').value);
      const n3 = parseFloat(document.getElementById('nota3').value);

      const promedio = ((n1 + n2 + n3) / 3).toFixed(2);

      document.getElementById('resultado').innerText = `El promedio es: ${promedio}`;
    });