let nextLevel = 'index.html';

const shoot = () => {
  const bullet = document.createElement('a-sphere');
  let pos = myCamera.getAttribute('position');
  bullet.setAttribute('position', pos);
  bullet.setAttribute('velocity', getDirection(myCamera, 30));
  bullet.setAttribute('dynamic-body', true);
  bullet.setAttribute('radius', 0.5);
  // bullet.setAttribute('src', 'https://i.imgur.com/H8e3Vnu.png');
  myScene.appendChild(bullet);
  bullet.addEventListener('collide', shootCollided);
};

const shootCollided = (event) => {
  if (event.detail.body.el.id === 'floor') {
    console.log('Hit the floor');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.className === 'target') {
    console.log('Hit the target!');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
    myScene.removeChild(event.detail.body.el);
    document.getElementById('collisionSound').components.sound.playSound();
  }
  if (document.querySelectorAll('.target').length === 0) {
    // console.log('You win!');
    // alert('You won!');
    // location.href = nextLevel;
    setTimeout(function () {
      location.href = nextLevel;
    }, 2000);
  }
};

document.onkeydown = (event) => {
  if (event.key == ' ') {
    shoot();
  }
};
