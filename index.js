$(document).ready(function () {
    $('button').on('click', function () {
      $('#userinfo').html("")
      $('#listofmatches').html("")
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/api/user/',
            dataType:"json",
            success: function (data) {
                console.log(data)
                let content = ''
                for (i = 0; i < data.length; i++) {
                  content += '<tr>'
                  content += '<td>' + data[i].id + '</td>'
                  content += '<td> <input type="text" value="' + data[i].name + '"></td>'
                  content += '<td>'
                  content += '<button class="btn btn-primary">Update</button>'
                  content += '<button class="btn btn-danger">Delete</button>'
                  content += '<button class="btn btn-info">Task</button>'
                }
                $('#userinfo').html(content)
                
            }
          });
        $.ajax({
            type: 'GET',
            url: '/bestmatch/' + $('input').val(),
            dataType:"json",
            success: function (data) {
              var content = ''
              for (let i = 0; i < data.length; i++) {
                content += '<div class="card col-4">'
                content += '<div class="card-body" >'
                content += '<img src="' + data[i].photo + '" style="height:14%" width="100%" max-width="600px" >'
                content += '<h4 class="card-title">' + data[i].name + '</h4>'
                content += '<h6 class="text-muted card-subtitle mb-2">' +data[i].id + '</h6>'
                content += '<p class="card-text">' +data[i].strengths + '</p>'
                content += '</div>'
                content += '</div>'
              }
              $('#listofmatches').html(content)
            }
          });

      console.log('Done!!!!');
    });
  });