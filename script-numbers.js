  document.getElementById('woo').addEventListener('click', function(event) {
    event.preventDefault();
    // get form values
    let number = document.getElementById('number').value;
    let s = document.getElementById('selector');
    let type = s.options[s.selectedIndex].value;
  
    // setup URL
    // The cslone.byu.edu forwards to the numbers API but converts it to https
    let url = "https://v2.jokeapi.dev/joke/" + type;
    // call API
    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return "Error calling the Numbers API service: " + response.statusText;
        }
        return response.json();
      }).then(function(json) {
        console.log(json);
        // update DOM with response
        updateResult(json.setup + "\n" + json.delivery);
      });
      function updateResult(info) {
        document.getElementById('results').textContent = info;
      }
  });
  
  


