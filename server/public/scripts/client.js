console.log('sourced');
$(document).ready(function() {
  console.log('jquery good to go');
  getPhishData();

  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response) {
      console.log('response', response);
      $('#firstFishy').text(response);
    }
  });

  $('#newFishButton').on('click', function() {
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response){
        console.log('response', response);
        getPhishData();
    },
    error: function(error) {
      alert('Must enter a new fish!');;
    }
    });
  });

});

function getPhishData() {
    $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response) {
      // console.log('response', response);
    $('#phishTank').empty();
      response.forEach(function(object){
        $('#phishTank').append('<li>'+ object.name + '</li>');
      });
    }
  });
}
