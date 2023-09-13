GitHubCalendar(".calendar", "ShaswatSRaghuvansi");

GitHubCalendar(".calendar", "ShaswatSRaghuvansi", { responsive: true })

// Use a proxy
GitHubCalendar(".calendar", "ShaswatSRaghuvansi", {
    proxy (ShaswatSRaghuvansi) {
      return fetch(`https://your-proxy.com/github?user=${ShaswatSRaghuvansi}`)
    }
 }).then(r => r.text())