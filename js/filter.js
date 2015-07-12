$(function () {
	setInterval(function(){
		detect(document);
	},500)
})
function detect(doc) {
    var $iframes = $('iframe',doc);
    $iframes.each(function () {
        var $ifr = $(this);
        var src = $ifr.attr('src') || '';
        $ifr.remove();
        console.warn('地址为',src,'的iframe已清除！！！');
    })
}