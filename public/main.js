var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");
var thumbDown = document.getElementsByClassName("fa-thumbs-down") 
var check = document.getElementsByClassName("fa-check");




Array.from(check).forEach(function(element){
  element.addEventListener('click', function(){
    const decks = this.parentNode.parentNode.childNodes[1].innerText
    const trucks  = this.parentNode.parentNode.childNodes[3].innerText
    const wheels = this.parentNode.parentNode.childNodes[5].innerText
    const griptape = this.parentNode.parentNode.childNodes[7].innerText
    const hardware = this.parentNode.parentNode.childNodes[9].innerText
    const favorited = this.parentNode.parentNode.classList.contains('activeListItem')? false : true
    console.log(favorited)
    fetch('favorite' , {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        'decks': decks,
        'trucks': trucks,
        'wheels':wheels,
        'griptape':griptape,
        'hardware': hardware,
        'favorited': favorited
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(false)
    })
  })
}) 



Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
        const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('thumbup', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
    const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('thumbdown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp':thumbUp - 2
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const decks = this.parentNode.parentNode.childNodes[1].innerText
        const trucks = this.parentNode.parentNode.childNodes[3].innerText
        const wheels = this.parentNode.parentNode.childNodes[5].innerText
        const griptape = this.parentNode.parentNode.childNodes[7].innerText
        const hardware = this.parentNode.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'decks': decks,
            'trucks': trucks,
            'wheels': wheels,
            'griptape': griptape, 
            'hardware': hardware

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
