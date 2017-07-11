var stressScore = 0;


$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    $("#stress-signs").show();
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressSignValue = $(this).val();
      $('#stress-signs').append(stressSignValue + "<br>");
    });
    $("#stress-symptoms").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      var stressSymptomValue = $(this).val();
      $('#stress-symptoms').append(stressSymptomValue + "<br>");
    });
    $("#stress-coping").show();
    $("input:checkbox[name=stress-coping]:checked").each(function(){
      var stressCopingValue = $(this).val();
      $('#stress-coping').append(stressCopingValue + "<br>");
    });
    $('#stress-survey').hide();
  });
});
