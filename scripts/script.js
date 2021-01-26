// User
const User = {
  name: "Kevin",
  level: 1,
  gold: 0,
  online: false,
};

// The setInterval should be on the global scope, so it can be accessed by other functions to start/stop.

$(window).on("load", () => {
  userGreet();
  console.log(`Type "startFarm()" to begin generating gold`);
});

function userGreet() {
  console.log(`"Hello ${User.name}"`);
}

function startFarm() {
  setInterval(userAction, 1000);
}

function userAction() {
  console.clear();
  userGreet();
  User.gold += 1;
  console.log(`Gold: ${User.gold}`);
  console.log('Type "stopFarm()" to stop generating gold');
}
