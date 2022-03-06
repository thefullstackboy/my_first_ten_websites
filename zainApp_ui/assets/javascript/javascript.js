//on click event
const allids = ["card1", "card2" , "card3" , "card4", "card5", "card6", "card7"];
let visibleId = null;
function callaction(id) {
    if(visibleId !== id) {
        visibleId = id;
    }
    hide()
}

function hide() {
  let dis,i,id;
  for(i = 0; i < allids.length; i++) {
      id = allids[i];
      dis = document.getElementById(id);
      if(visibleId === id) {
          dis.style.opacity = 1;
      } else {
          dis.style.opacity = 0.2;
      }
  }
}



