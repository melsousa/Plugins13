 $(document).ready(function() {
      // This example adds a duration to the tweens so they are synced to the scroll position

      var controller = $.superscrollorama();
      
      // amount of scrolling over which the tween takes place (in pixels)
      var scrollDuration = 300; 

      // individual element tween examples
      controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#a-it', TweenMax.from( $('#a-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#b-it', TweenMax.from( $('#b-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#c-it', TweenMax.from( $('#c-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#d-it', TweenMax.from( $('#d-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#e-it', TweenMax.from( $('#e-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#f-it', TweenMax.from( $('#f-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#g-it', TweenMax.from( $('#g-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#h-it', TweenMax.from( $('#h-it'), .5, {css:{opacity: 0}}), scrollDuration);
      controller.addTween('#i-it', TweenMax.from( $('#i-it'), .5, {css:{opacity: 0}}), scrollDuration);
            });
 