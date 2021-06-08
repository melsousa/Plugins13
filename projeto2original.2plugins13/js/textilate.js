$(function (){
    var log = function (msg) {
      return function () {
        if (console) console.log(msg);
      }
    }
    $('code').each(function () {
      var $this = $(this);
      $this.text($this.html());
    })

    var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';

    var $form = $('.playground form')
      , $viewport = $('.playground .viewport');

    var getFormData = function () {
      var data = {
        loop: true,
        in: { callback: log('in callback called.') },
        out: { callback: log('out callback called.') }
      };

      
      $form.find('[data-key="type"]').each(function () {
        var $this = $(this)
          , key = $this.data('key')
          , type = $this.data('type')
          , val = $this.val();

          data[type].shuffle = (val === 'shuffle');
          data[type].reverse = (val === 'reverse');
          data[type].sync = (val === 'sync');
      });

      return data;
    };

    $.each(animateClasses.split(' '), function (i, value) {
      var type = '[data-type]'
        , option = '<option value="' + value + '">' + value + '</option>';

      
      if (type) {
        $form.find('[data-key="effect"]' + type).append(option);
      }
    });

    //importante do textillate
    $('.jumbotron h1')
      .fitText(0.5)
      .textillate({ in: { effect: 'flipInY' }});

    
    
    setTimeout(function () {
      $('h1.glow').removeClass('in');
    }, 2000);

   
    
  });
