function load_users() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8000/api/user/',
    dataType:"json",
    success: function (data) {
        console.log(data)
        let content = ''
        for (i = 0; i < data.length; i++) {
          content += '<tr>'
          content += '<td>' + data[i].id + '</td>'
          content += '<td> <input id="user_name_'+ data[i].id +'" type="text" value="' + data[i].name + '"></td>'
          content += '<td>'
          content += '<button id="update_user" onclick="update_user(' + data[i].id + ')" class="btn btn-primary">Update</button>'
          content += '<button id="delete_user" onclick="delete_user(' + data[i].id + ')" class="btn btn-danger">Delete</button>'
          content += '<button id="user_task" class="btn btn-info" onclick="show_modal()">Task</button>'
        }
        $('#user_info').html(content)
    }
  });
}

function update_user (user_id) {
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:8000/api/user/' + user_id + '/',
    dataType:"json",
    data:{name:$('#user_name_'+ user_id).val()},
    success: function(data) {
      console.log(data)
      load_users()
      alert("user updated")
    }
  })
}

function delete_user (user_id) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:8000/api/user/' + user_id + '/',
    dataType:"json",
    success: function(data) {
      console.log(data)
      load_users() 
    }
  })
}

function show_modal () {
  $('#modaltask').modal("show")
  console.log("print modal")
}

function user_task (user_id) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8000/user/' + user_id + 'user_tasks/',
    dataType:"json",
    success: function(data) {
      console.log(data)
      load_users() 

  }
})
}

$(document).ready(function () {
    load_users()
    $('button').on('click', function () {
      $('#userinfo').html("")
      $('#listofmatches').html("")
        
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