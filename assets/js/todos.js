// marking todo as done
$("li").click(function(){
  $(this).toggleClass("completed");
});

// deleting todo
$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
})
