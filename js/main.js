var $form = $('.form');
var $chore = $('.chore');
var $list = $('.list');


$form.on('submit', function (e) {
   e.preventDefault();
    
    var $li = $('<li>');
    var $choreH2 = $('<H2>').html($chore.val());
    
    $li.append($choreH2);
    $list.append($li);
    
});