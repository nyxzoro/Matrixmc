function copyIP() {
  navigator.clipboard.writeText("matrixmc.aternos.me");
  alert("Matrix MC IP copied 🔥");
}

// Simulated live server status & player count
let online = true;
let players = Math.floor(Math.random() * 50) + 1;

setTimeout(() => {
  document.getElementById("statusText").innerText = "Status: " + (online ? "Online 🟢" : "Offline 🔴");
  document.getElementById("players").innerText = "Players online: " + players;
}, 1000);

// English ↔ Malayalam Translation
let translated = false;
function translateText() {
  if(!translated){
    document.getElementById("description").innerText = "അനാർക്കി • എക്കണമി • CPvP";
    document.getElementById("descTitle").innerText = "സെർവർ വിവരണം";
    document.getElementById("descContent").innerText = "Matrix MC ഒരു ഹാർഡ്‌കോർ Minecraft സെർവർ ആണ്, പ്യൂർ അനാർക്കി ഗെയിംപ്ലേ, അഡ്വാൻസ്ഡ് എക്കണമി സിസ്റ്റം, ക്രിസ്റ്റൽ CPvP ബാറ്റിൽസ് എന്നിവയുടെ വിശേഷതകൾ ഉണ്ട്. നിയമങ്ങളൊന്നും ഇല്ല. അതിരുകളൊന്നും ഇല്ല. ശക്തമായവരാൽ മാത്രം ജീവിക്കുക!";
    document.getElementById("featureTitle").innerText = "വിശേഷതകൾ";
    document.getElementById("featuresList").innerHTML = "<li>🔥 അനാർക്കി ഗെയിംപ്ലേ</li><li>💰 എക്കണമി സിസ്റ്റം</li><li>💎 ക്രിസ്റ്റൽ CPvP</li><li>⚡ ഉത്തമ പ്രവർത്തനം</li><li>🌍 മൾട്ടിപ്ലെയർ സർവൈവൽ</li>";
    document.getElementById("statusTitle").innerText = "സെർവർ നില";
    translated = true;
  } else {
    // Revert back to English
    document.getElementById("description").innerText = "Anarchy • Economy • CPvP";
    document.getElementById("descTitle").innerText = "Server Description";
    document.getElementById("descContent").innerText = "Matrix MC is a hardcore Minecraft server with pure anarchy gameplay, advanced economy system, and intense Crystal PvP battles. No rules. No limits. Survival of the strongest!";
    document.getElementById("featureTitle").innerText = "Features";
    document.getElementById("featuresList").innerHTML = "<li>🔥 Anarchy Gameplay</li><li>💰 Economy System</li><li>💎 Crystal PvP (CPvP)</li><li>⚡ Optimized Performance</li><li>🌍 Multiplayer Survival</li>";
    document.getElementById("statusTitle").innerText = "Server Status";
    translated = false;
  }
      }
