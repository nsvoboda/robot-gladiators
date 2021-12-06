var playerName = window.prompt("what is your robot's name?");
 var playerHealth = 100;
 var playerAttack = 10;

 console.log(playerName, playerAttack, playerHealth);

 var enemyName = "Roborto";
 var enemyHealth = 50;
 var enemyAttack = 12;

 var fight = function(){
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "fight" || promptFight === "FIGHT"){
  
      //player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    //enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");
  };

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" ||| promptFight === "SKIP"){
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }


 fight();