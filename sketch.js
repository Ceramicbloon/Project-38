//Create variables here
var dog, dog1, happyDog, database, foods, foodStock
var feed, addFood
var fedTime, lastFed
var foodObj
var milk
var garden, bedroom, bathroom, liveroom
var readState
var gameState
var currentTime
var gotoGarden
var gotosleep
var gotoroom
var ajldfhaklsdhfkasdkfhakjhdfkjlhaskldfjhaskldhfa

function preload() {
  dog1 = loadImage("Dog.png")
  happyDog = loadImage("HappyDog.png")
  milk = loadImage("Milk.png")
  garden = loadImage("virtual pet images/Garden.png")
  bedroom = loadImage("virtual pet images/Bed Room.png")
  bathroom = loadImage("virtual pet images/Wash Room.png")
  liveroom = loadImage("virtual pet images/Living Room.png")
  sadDog = loadImage("virtual pet images/Lazy.png")
  //load imaes here
}


function setup() {
  createCanvas(494, 801);


  foodObj = new FoodF()


  database = firebase.database()

  dog = createSprite(247, 600, 20, 20)
  dog.scale = 0.3

  feed = createButton("Feed")
  feed.position(250, 5)
  feed.mousePressed(feedDog)



  addFood = createButton("Add Food")
  addFood.position(300, 5)
  addFood.mousePressed(moreFood)

  gotoroom = createButton("Play In Living Room")
  gotoroom.position(70, 30)
  gotoroom.mousePressed(update(2))

  gotosleep = createButton("Go To Sleep")
  gotosleep.position(210, 30)
  gotosleep.mousePressed(change3)

  gotoGarden = createButton("Play In Garden")
  gotoGarden.position(305, 30)
  gotoGarden.mousePressed(change4)

  ajldfhaklsdhfkasdkfhakjhdfkjlhaskldfjhaskldhfa = createButton("Take a Bath")
  ajldfhaklsdhfkasdkfhakjhdfkjlhaskldfjhaskldhfa.position(210, 55)
  ajldfhaklsdhfkasdkfhakjhdfkjlhaskldfjhaskldhfa.mousePressed(change5)

  // park = createButton("Go to Park")
  // park.position(200, 10)

}

// function readStock(data) {
//   foods = data.val()
// }

// function writeStock(x) {

//   if (x <= 0) {
//     x = 0
//   } else {
//     x = x - 1
//   }
//   database.ref('/').update({
//     Food: x
//   })
// }
//foodObj = new Food()
function feedDog() {
  dog.addImage(happyDog)

  foodObj.updateFoodStock()
  gameState = 1
  database.ref('/').update({ 'gameState': gameState })
  //console.log(foods)


}

function change2() {
  gameState = 2
  database.ref('/').update({ 'gameState': gameState })
}

function change3() {
  gameState = 3
  database.ref('/').update({ 'gameState': gameState })
}

function change4() {
  gameState = 4
  database.ref('/').update({ 'gameState': gameState })
}

function change5() {
  gameState = 5
  database.ref('/').update({ 'gameState': gameState })
}




function moreFood() {
  foodObj.addFood()
  gameState = 1
  database.ref('/').update({ 'gameState': gameState })
}

function update(state) {
  foodObj.getState()
  gameState = state
  database.ref('/').update({
    gameState: state
  })
}

// if(feed.mousePressed(function(){

// }))
function draw() {

  background(46, 139, 87)
  text(foods, 200, 200)
  // readState = database.ref('gameState')
  // readState.on("value", function(data){
  //   gamestate = data.val()
  // })



  if (gameState === 1) {
    //dog.show()

    foodObj.display()

   
    dog.addImage(dog1)
     dog.visible = true
    //console.log("a")
  } else if (gameState === 2) {
    image(liveroom, 0, 0)

    //foodObj.garden()
    dog.visible = false
  } else if (gameState === 3) {
    image(bedroom, 0, 0)
    //foodObj.sleepyhead()
    dog.visible = false
  } else if (gameState === 4) {
    image(garden, 0, 0)
    //foodObj.sleepyhead()
    dog.visible = false
  } else if (gameState === 5) {
    image(bathroom, 0, 0)
    //foodObj.sleepyhead()
    dog.visible = false
  }
  foodObj.getState();

  // console.log(fedTime)
  currentTime = hour();
  // if (fedTime != undefined) {
  //   if (park.mousePressed()) {
  //     update("park")
  //     foodObj.garden()
  //   } else if (currentTime == fedTime + 2) {
  //     update("sleeping")
  //     foodObj.sleepyhead()
  //   } else if (currentTime == fedTime + 3) {
  //     foodObj.bath();
  //   } else {
  //     update("hungry")
  //   }
  // }
  textSize(20)
  fill("white")




  // console.log(gameState)
  fedTime = database.ref('fedTime')
  fedTime.on("value", function (data) {
    fedTime = data.val();
    //console.log(fedTime)
    if (fedTime >= 12) {
      text("Last fed: " + fedTime % 12 + " PM", 100, 25)
    } else if (fedTime === 0) {
      text("Last fed: 12 AM", 100, 25)
    } else {
      text("Last fed: " + fedTime + " AM", 100, 25)
    }
  })



  drawSprites();
  //foodObj.display();
  //add styles here
  //mageMode(CENTER)
  //image(milk, 720, 220, 70, 70)





}



