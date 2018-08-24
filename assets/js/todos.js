// marking todo as done
$("ul").on('click', 'li', function(){
  $(this).toggleClass("completed");
});

// deleting todo
$("ul").on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
})

// adding todos
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabing new text from input
    var todoText = $(this).val();
    $(this).val("");
    // create new li
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
