$(document).ready(function(){
    
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>'+ input +'</li>')
        $(this).val('');
    })

    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
        saveTasks();
    });

    

})