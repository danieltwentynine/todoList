$(document).ready(function(){

    $('header button').click(function(){
        $('.container').slideDown()
    })

    $('#btn-Close').click(function(){
        $('.container').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const newActivity = $('#activity').val()
        const li = $('<li></li>')
        const input = $('<input>', {type: 'checkbox', id: newActivity, value: newActivity})
        const label = $('<label></label>', {for: newActivity, text: newActivity});

        li.append(input, label)

        $('#ul').append(li)
        $('#activity').val('')
    })

    $('#btn-clear-list').click(function(){
        if (confirm("Are you sure you want to clear the list?")) {
            $('#ul').empty()
        }
    })
})