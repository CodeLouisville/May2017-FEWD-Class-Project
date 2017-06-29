
var menuSrc = 'https://cdn.rawgit.com/Bumbolio/567f8ed0ac99703fbbe24a64638fcc81/raw/9a0930b07e6b746a76e058ac956e5528aedcfacf/menu.json';

$.get(menuSrc).then(renderMenu);

function renderMenu(menu) {
  
  //Assigning the foodmenu element to a variable for later use.  
  var menuElement = document.getElementById("foodmenu");

  //Looping through each category inside the Food array.
  menu.Food.forEach(function(category) {
      var table = 
          `<table class="menu">
              <thead>
                  <tr>
                      <th colspan="2">
                          <h4 class="menu-head red">${category.name}</h4>
                      </th>
                  </tr>
              </thead>
              <tbody>`;
      
      //Looping through each item of the current category.
      category.items.forEach(function(item) {
          table +=
              `<tr>
                  <td>${item.name}</td>
                  <td class="menu-price text-right">$${item.price.toFixed(2)}</td>
              </tr>`;
      });

      table += '</tbody></table>'

      menuElement.innerHTML += table;
  });

}



$('#email-field').keyup(function(){
  if(this.value !== '' && !isValidEmailAddress(this.value)) {
    $('#email-validation-message').show();
    $('#email-submit').prop('disabled', true);
  } else {
    $('#email-validation-message').hide();
    $('#email-submit').prop('disabled', false);
  }
});

$('#email-submit').click(function(e){
  e.preventDefault();
  alert('Server unavaliable, try again later!');
});

//Checks if email address is valid.  
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};