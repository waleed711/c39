class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.resetbutton = createButton("reset")
    this.restettittle = createElement("h2")
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  this.resetbutton.position(width/2+150,150)
  this.restettittle.position(width/2+100,100)
  this.restettittle.html("resetgame")
  }
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();

  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }


  handlereset(){
    this.resetbutton.mousePressed(()=> {
database.ref("/").set({
  gameState:0,
  playerCount:0,
  players:{}
})
    })
  }
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.handlereset();
  }
}
