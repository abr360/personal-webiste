
    function postToGoogle() {
      var field1 = $("#Name").val();
      var field2 = $("#Email").val();
      var field3 = $("#Phone").val();
      var field4 = $("#Subject").val();
      var  field5= $("#Message").val();

      $.ajax({
        url: "{https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgUKyanFJcKywWPn0TN8d5kVZyNXx-et3s0jbu2wEpy9Itdw/formResponse}",
          
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
          "entry.1263775261": field1,
          "entry.1839201696": field2,
          "entry.205693829": field3,
          "entry.875492108": field4,
          "entry.941027105": field5
          
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
          $('#form-content').trigger('reset');
        },
        error: function (x, y, z) {
          $('#form-content').trigger('reset');
        }
      });
      return false;
    }
