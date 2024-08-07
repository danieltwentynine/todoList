$(document).ready(function(){

    $('#btn-Open').click(function(){
        $('main').slideDown()
    })

    $('#btn-Close').click(function(){
        $('main').slideUp()
    })

    $('#btn-clear-list').click(function(){
        if (confirm("Are you sure you want to clear the list?")) {
            $('#list').empty()
        }
    })

    $('#addBtn').click(function() {

        var inputValue = $('#input').val()

        if (inputValue === '') {
            alert("You must write something!")
        } else {
            var li = $('<li></li>').text(inputValue) //cria uma tag <li></li>
            var span = $('<span class="close">\u00D7</span>') // mostrar o 'x' para deletar tarefa
            li.append(span)
            $('#list').append(li)
            $('#input').val('') // Apagar o input

            // Deletar a tarefa
            span.click(function() {
                li.remove()
            })
        }
    })
})