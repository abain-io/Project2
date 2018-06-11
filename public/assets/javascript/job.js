var Messenger = function(el){
    'use strict';
    var m = this;
    
    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        'Your Solution',
        'To Your Job Hunt',
        'And Management',
        'In One Place!'
      ];
      
      setTimeout(m.animateIn, 100);
    };
    
    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } 
      
      return random_text;
    };
    
    m.animateIn = function(){
      if(m.current_length < m.messages[m.message].length){
        m.current_length = m.current_length + 2;
        if(m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }
        
        var message = m.generateRandomString(m.current_length);
        $(el).html(message);
        
        setTimeout(m.animateIn, 20);
      } else { 
        setTimeout(m.animateFadeBuffer, 20);
      }
    };
    
    m.animateFadeBuffer = function(){
      if(m.fadeBuffer === false){
        m.fadeBuffer = [];
        for(var i = 0; i < m.messages[m.message].length; i++){
          m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
        }
      }
      
      var do_cycles = false;
      var message = ''; 
      
      for(var i = 0; i < m.fadeBuffer.length; i++){
        var fader = m.fadeBuffer[i];
        if(fader.c > 0){
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      $(el).html(message);
      
      if(do_cycles === true){
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };
    
    m.cycleText = function(){
      m.message = m.message + 1;
      if(m.message >= m.messages.length){
        m.message = 0;
      }
      
      m.current_length = 0;
      m.fadeBuffer = false;
      $(el).html('');
      
      setTimeout(m.animateIn, 200);
    };
    
    m.init();
  }
  
  // console.clear();
  var messenger = new Messenger($('#job-hunt'));
  

    $(function pmatch() {
        $("#submit-signup").click(function () {
            var result = true;
            var password = $("#password-input").val();
            var confirmPassword = $("#confirmPassword-input").val();
            var firstName = $("#firstName").val()
            var lastName = $("#lastName").val()
            var email = $("#email-input").val()
            if(firstName == "") {
              $(".error-message1").text("*First Name can not be empty").fadeIn();
              $(".error-message1").css("color", "red");
              console.log("*empty");
              result = false;             
            }
            if(lastName == "") {
              $(".error-message2").text("*Last Name can not be empty").fadeIn();
              $(".error-message2").css("color", "red");
              console.log("*empty");
              result = false;                          
            }
            if(email == "") {
              $(".error-message3").text("*Email can not be empty").fadeIn();
              $(".error-message3").css("color", "red");
              console.log("*empty");
              result = false;                           
            }
            if(password == "") {
              $(".error-message4").text("*Password can not be empty").fadeIn();
              $(".error-message4").css("color", "red");
              console.log("*empty");    
              result = false;                           
            }
            if (password != confirmPassword) {
              $(".error-message5").text("* Password do not match").fadeIn();
              $(".error-message5").css("color", "red");
              console.log("* Password do not match"); 
              result = false;                           
            } 
            if(confirmPassword == "") {
              $(".error-message5").text("*Confirm Password can not be empty").fadeIn();
              $(".error-message5").css("color", "red");
              console.log("*empty");        
              result = false;                           
            }
            else {
              alert("Signup Successful");
            }
            return result;            
        });
    });

    $(function fname() {
      $("#submit-signup").click(function () {
          var password = $("#password-input").val();
          var confirmPassword = $("#confirmPassword-input").val();
          var firstName = $("#firstName").val()
          var lastName = $("#lastName").val()
          var email = $("#email-input").val()
        });
      });


      // slide form
      