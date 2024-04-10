var rotate, timeline;

rotate = function() {
			return $('card:first-child').fadeOut(400, 'swing', function() {
      return $('card:first-child').appendTo('.container').hide();
    }).fadeIn(400, 'swing');
  };

(function() {

  timeline = setInterval(rotate, 1200);

  $('body').hover(function() {
    return clearInterval(timeline);
  });

	setTimeout(function() {
		console.log("第一次动画");
    return rotate();
  },100);
	
	
  $('card').click(function() {
		console.log("点击");
    return rotate();
  });
	
//词性高亮
var colorMap = {
    'n.':'#e3412f',
    'a.':'#f8b002',
    'adj.':'#f8b002',
    'ad.':'#684b9d',
    'adv.':'#684b9d',
    'v.':'#539007',
    'vi.':'#539007',
    'vt.':'#539007',
    'prep.':'#04B7C9',
    'conj.':'#04B7C9',
    'pron.':'#04B7C9',
    'art.':'#04B7C9',
    'num.':'#04B7C9',
    'int.':'#04B7C9',
    'interj.':'#04B7C9',
    'modal.':'#04B7C9',
    'aux.':'#04B7C9',
    'pl.':'#D111D3',
    'abbr.':'#D111D3',
  };
  [].forEach.call(document.querySelectorAll('.bing'), function(div) {
  div.innerHTML = div.innerHTML
  .replace(/\b[a-z]+\./g, function(symbol) {
    if(colorMap[symbol]) {
      return '<a class="hightlight" style="background-color:' 
              + colorMap[symbol] + ';" >'+ symbol + '</a>';
    }else{
      return symbol;
    }
  });
 });
	
	
}).call(this);



//动态背景
$(document).ready(function() {
  animateDiv('.circle1');
  animateDiv('.circle2');
  animateDiv('.circle3');
  animateDiv('.circle4');
  animateDiv('.circle5');
  animateDiv('.circle6');
  animateDiv('.circle7');
  animateDiv('.circle8');
  animateDiv('.circle9');
  animateDiv('.circle10');
});

function makeNewPosition($container) {
    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(itemToMove) {
    var $target = $(itemToMove);
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(itemToMove).animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv(itemToMove);
    });
};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}
