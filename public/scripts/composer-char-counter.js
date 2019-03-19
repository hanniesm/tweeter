let counter = 0;

function countDown(event) {
  counter += 1;
  console.log(counter)
}

$(document).ready(function(){
  const frmNode = $('textarea');
    frmNode.on("keyup", function(event) {
      // event.preventDefault();
      // console.log(event.key);
      countDown(event);
      // $(this).find('.counter')
    });
})



