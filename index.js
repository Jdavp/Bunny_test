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
          content += '<td class="text-center d-flex m-auto align-items-sm-end">'
          content += '<button id="update_user" onclick="update_user(' + data[i].id + ')" class="btn btn-primary rounded" type="button" style="margin-right: 5px;">Update</button>'
          content += '<button id="delete_user" onclick="delete_user(' + data[i].id + ')" class="btn btn-danger rounded" type="button" style="margin-right: 5px;">Delete</button>'
          content += '<button id="user_task" class="btn btn-info rounded" data-toggle="modal" data-target="#myModal" type="button" style="margin-right: 5px;">Task</button>'
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


function user_task (user_id) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8000/user/' + user_id + 'user_tasks/',
    dataType:"json",
    success: function(data) {
      console.log(data)
      let content = ''
        for (i = 0; i < data.length; i++) {

        }
    }
})
}

$(document).ready(function () {
    load_users()
    console.log('Done!!!!');
    });