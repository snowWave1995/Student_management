$(document).ready(function(){

  $('.dropdown').dropdown();
  $('.ui.checkbox').checkbox();

  $('.formexample .form')
  .form({
    on: 'blur',
    fields: {
      username: {
        identifier  : 'username',
        rules: [
          {
            type   : 'empty',
            prompt : '用户名不能为空'
          },
            {
                type:'number',
                prompt:'用户名只能是数字'
            },
            {
              type:'exactLength[10]',
                prompt:'用户名长度不正确'
            }
        ]
      },

      password: {
        identifier  : 'password',
        rules: [
            {
              type: 'empty',
              prompt: '密码不能为空'
            },
            {
                type:'number',
                prompt:'密码只能是数字'
            },
            {
              type:'exactLength[6]',
                prompt:'密码长度不正确'
            }
      ]
      }


    }
  });

})


$('.menu .item')
  .tab()
;

