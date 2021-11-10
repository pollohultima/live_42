

const now = new Date();
console.log(now);

const minutes = now.getMinutes();
console.log(minutes);

const minutesInOneHour = 60;

const lessMinutes = minutesInOneHour - minutes;
console.log("Alla fine dell'ora mancano: " + lessMinutes + " minuti");