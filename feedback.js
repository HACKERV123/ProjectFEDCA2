(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.ur
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  window.onload = function() {
    document.getElementById("SubmitForm").onsubmit = function() {
      var txtURL = this.txtURL.valuel
      if (!txtURL) {
          this.txtURL.focus();
          return false;
      }
      return true;
    }
  }
