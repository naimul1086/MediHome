  
        document.getElementById('printBtn').addEventListener('click', () => {
            window.print();
        });
        
        document.getElementById('downloadBtn').addEventListener('click', () => {
            // In a real application, this would generate and download a PDF
            // For demo purposes, we'll create a simple text fil
            
            const blob = new Blob([invoiceContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'invoice-MH-2024-12346.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
        
        // Email functionality (simulated)
        document.getElementById('emailBtn').addEventListener('click', () => {
            // In a real application, this would open an email client or send via API
            alert('Invoice would be emailed to rahman@example.com');
        });
    document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.querySelectorAll(".flash-messages .alert");

  alerts.forEach((alert, i) => {
    // ছোট delay দিয়ে দেখাও
    setTimeout(() => {
      alert.classList.add("show");
    }, i * 150);

    // 2 সেকেন্ড পর hide করো
    setTimeout(() => {
      alert.classList.remove("show");
      alert.classList.add("hide");
      // animation শেষে DOM থেকে remove
      setTimeout(() => alert.remove(), 500);
    }, 2000 + i * 150);
  });
});
