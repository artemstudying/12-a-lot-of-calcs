var $calcInputs = document.querySelectorAll('.calc')
  for (var i = 0; i < $calcInputs.length; i++) {
    $calcInputs[i].addEventListener('click', function(e) {

      console.log('yo');

      e.preventDefault();

      var $parent = this.parentNode;

      var isSale = $parent.querySelector('[value="sale"]').
        checked;

      var res = $parent.querySelector('.sum').value;

      if (isSale) {
        res *= 26;
      }else {
        res *=25;
      }

      $parent.querySelector('h3').innerText = res;

    });
  }
