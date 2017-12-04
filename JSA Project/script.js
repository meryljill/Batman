var power = [{
  photo: "images/1939batman.jpeg",
  year: 1939,
  comic: "DC Comics 27",
  color_scheme: "Blue and Grey",
  vehicle: "Batmobile",
  nickname: "The Batman",
},
{
  photo: "images/1966batman.jpeg",
  year: 1966,
  comic: "DC Comics Batman '66'",
  color_scheme: "Blue and Grey",
  vehicle: "Batmobile, Batboat, Batcopter",
  nickname: "Batman",
},
{
  photo: "images/2008batman.jpeg",
  year: 2008,
  comic: "DC Comics The Dark Knight",
  color_scheme: "Black",
  vehicle: "Batmobile, Batwing, Batpod",
  nickname: "The Dark Knight",
}]
alert("Boom! Smack! KaPow!")


function changePicture(year){
  var image = document.getElementById("images");
  var xyear = document.getElementById("yearlabel");
  var thenickname = document.getElementById("nickname");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var paraone = document.getElementById("para1");
  var paratwo = document.getElementById("para2");
  var parathree = document.getElementById("para3");
  console.log(button1.classList);
  if (year === 1966){
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
    xyear.innerText = year;
    thenickname.innerText = power[1].nickname;
    paraone.innerHTML = power[1].comic;
    paratwo.innerHTML = power[1].color_scheme;
    parathree.innerHTML = power[1].vehicle;
    image.src = power[1].photo;
  }else if (year === 2008){
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    xyear.innerText = year;
    thenickname.innerText = power[2].nickname;
    paraone.innerHTML = power[2].comic;
    paratwo.innerHTML = power[2].color_scheme;
    parathree.innerHTML = power[2].vehicle;
    image.src = power[2].photo;
  }else if (year === 1939){
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    xyear.innerText = year;
    thenickname.innerText = power[0].nickname;
    paraone.innerHTML = power[0].comic;
    paratwo.innerHTML = power[0].color_scheme;
    parathree.innerHTML = power[0].vehicle;
    image.src = power[0].photo;
  }
}
