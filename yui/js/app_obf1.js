var $$ = Dom7;
var app = new Framework7({
	'root': "#app",
	'theme': 'ios',
	'tapHold': !! [],
	'view': {
		'stackPages': !! []
	},
	'routes': [{
		'path': '/',
		'url': "index.html"
	}, {
		'path': '/single/',
		'url': "pages/single.html"
	}, {
		'path': '/single-2/',
		'url':"pages/single-2.html"
	}, {
		'path': '/single-elements/',
		'url': "pages/single-elements.html"
	}, {
		'path': "/author/",
		'url': "pages/author.html"
	}, {
		'path': "/cards/",
		'url': "pages/cards.html"
	}, {
		'path': "/cards-author-comments/",
		'url': 'pages/cards-author-comments.html'
	}, {
		'path': "/cards-category/",
		'url': "pages/cards-category.html"
	}, {
		'path': "/cards-chip/",
		'url': "pages/cards-chip.html"
	}, {
		'path': '/cards-footer/',
		'url':"pages/cards-footer.html"
	}, {
		'path':"/cards-medium/",
		'url': "pages/cards-medium.html"
	}, {
		'path': "/cards-columns/",
		'url': "pages/cards-columns.html"
	}, {
		'path': "/list-category/",
		'url': "pages/list-category.html"
	}, {
		'path':"/list-category-author/",
		'url': "pages/list-category-author.html"
	}, {
		'path': "/list-category-date/",
		'url': 'pages/list-category-date.html'
	}, {
		'path': "/slider-1/",
		'url': "pages/slider-1.html"
	}, {
		'path': "/slider-2/",
		'url': "pages/slider-2.html"
	}, {
		'path': "/slider-3/",
		'url': "pages/slider-3.html"
	}, {
		'path': "/slider-4/",
		'url':"pages/slider-4.html"
	}, {
		'path': '/categories-cards/',
		'url': "pages/categories-cards.html"
	}, {
		'path': "/categories-columns/",
		'url': "pages/categories-columns.html"
	}, {
		'path': "/category/",
		'url': "pages/category.html"
	}, {
		'path': "/author-list/",
		'url': "pages/author-list.html"
	}, {
		'path': "/contact/",
		'url': "pages/contact.html"
	}, {
		'path': "/pull-to-refresh/",
		'url': "pages/pull-to-refresh.html"
	}, {
		'path':"/infinite-scroll/",
		'url': "pages/infinite-scroll.html"
	}, {
		'path': "/promo-banner/",
		'url': "pages/promo-banner.html"
	}]
});
var mainView = app.views.create(".view-main");
var categoriesView = app.views.create("#view-video");
var discoverView = app.views.create("#view-discover");
var searchView = app.views.create("#view-search");
var pagesView =app.views.create("#view-pages");

function activeCardTouch() {
	$$(".card").on("touchstart", function(_0x5b31ab) {
		$$(this).addClass("card-scale");
	});
	$$(".card").on("touchend", function(_0x5d33ae) {
		$$(this).removeClass("card-scale");
	});
	$$(".card").on('mousedown', function() {
		$$(this)['addClass']("card-scale");
	});
	$$(".card").on('mouseup', function() {
		$$(this).removeClass("card-scale");
	});
	$$(".swiper-slide a").on("click", function(_0x3f4745) {
		app.views.current.router.navigate($$(this).attr('data-href'));
	});
}
activeCardTouch();
app.on("pageInit", function(_0x10d767) {
	activeCardTouch();
});
var searchbar = app.searchbar.create({
	'el': '.searchbar',
	'searchContainer': ".list",
	'searchIn': ".item-title",
	'customSearch': !! [],
	'on': {
		'search' (_0x30b965, _0x5a67e9) {
			if (_0x5a67e9 == '') {
				$$(".search-results").hide();
			} else {
				$$(".search-preloader").show();
				setTimeout(function() {
					$$('.search-preloader').hide();
					$$(".search-results").show();
				}, 0x1f4);
			}
		}, 'clear' (_0x2e5857, _0x1791ff) {
			$$(".search-results").hide();
		}, 'disable' (_0x256a8) {
			$$('.search-results').hide();
		}
	}
});
$$(".page-search .popular-tags li").on('click', function(_0x28bcdd) {
	searchbar.search($$(this).find("span").text());
});
$$(".page-search .trending-search ul li").on("click", function(_0x655536) {
	searchbar.search($$(this).find(".item-title a").text());
});
var swiperOptions = {
	'spaceBetween': 0xa,
	'touchMoveStopPropagation': ![],
	'on': {
		'touchStart': function(_0x277f95) {
			$$(_0x277f95.target.closest('.card')).addClass("card-scale");
		},
		'touchEnd': function(_0x58cacf) {
			$$(_0x58cacf.target.closest(".card")).removeClass("card-scale");
		}
	}
};
var discoverSwiper = new Swiper("#discover-swiper", Object.assign({}, swiperOptions, {
	'width': 0x140
}));
var discoverSwiper2 = new Swiper("#discover-swiper2", Object.assign({}, swiperOptions, {
	'width': 0x104
}));
var discoverSwiper3 = new Swiper('#discover-swiper3', Object.assign({}, swiperOptions, {
	'width': 0x168
}));
$$(document)['on']("page:init", '.page[data-name="single"]', function(_0xede795) {
	var _0x5ef681 = new Swiper("#single-swiper", Object.assign({}, swiperOptions, {
		'width': 0x118
	}));
});
$$(document)['on']("page:init",'.page[data-name="single-2"]', function(_0x1d7cda) {
	var _0x510f93 = new Swiper("#single-swiper-2", Object.assign({}, swiperOptions, {
		'width': 0x118
	}));
});
$$('.ptr-content').on("ptr:refresh", function(_0x25fd3c) {
	setTimeout(function() {
		var _0x48008b = '<div class="title-container">' + '<span class="title-date">Tuesday 19 March</span>' + '<h1>Just Now</h1>' + "</div>" + '<a href="/single/">' 
		+ '<div class="card">' + '<img class="card-image" src="img/thumb-14.jpg" alt="">' + '<div class="card-infos">' 
		+ '<h2 class="card-title">How to Get Your First Tattoo Right</h2>' + '<div class="card-bottom">' + '<div class="card-author">' + '<img class="card-author-image" src="img/authors/author-1.jpg" alt="">' 
		+ '<div>Camille Aline</div>' + '</div>' +'<div class="card-comments"><i class="icon ion-ios-text"></i>3</div>' + '</div>' 
		+ '</div>' + '</div>' + '</a>';
		$$(".ptr-content").find('#today-content').prepend(_0x48008b);
		activeCardTouch();
		app.ptr.done();
	}, 0x3e8);
});
var allowInfinite = !! [];
$$(".infinite-scroll-content").on("infinite", function() {
	if (!allowInfinite) return;
	allowInfinite = ![];
	setTimeout(function() {
		allowInfinite = !! [];
		var _0x2cec87 = "<li>" + '<a href="/single/">' + '<div class="item-content">' + '<div class="item-media"><img src="img/thumb-15.jpg" width="44"/></div>'
		 + '<div class="item-inner">' + '<div class="item-subtitle">Fashion</div>' + '<div class="item-title">Archery at the 2024 Olympic Games</div>' + '<div class="item-subtitle bottom-subtitle"><img src="img/authors/author-3.jpg">Jess Roxana</div>' + '</div>'
		 +'</div>' + '</a>' +'</li>' +'<li>' +'<a href="/single/">' +'<div class="item-content">' +'<div class="item-media"><img src="img/thumb-16.jpg" width="44"/></div>' + '<div class="item-inner">' 
		 + '<div class="item-subtitle">Fashion</div>' + '<div class="item-title">Most Beautiful Beach of the Costa Brava</div>' + '<div class="item-subtitle bottom-subtitle"><img src="img/authors/author-2.jpg">Zorka Ivka</div>' 
		 + '</div>' +'</div>' +'</a>' + '</li>';
		$$("#infinite-content").append(_0x2cec87);
		app.infiniteScroll.destroy('.infinite-scroll-content');
		$$(".infinite-scroll-preloader").remove();
	}, 0x3e8);
});
$$(document).on("page:init", '.page[data-name="slider-1"]', function(_0x47a769) {
	var _0x2f3c0a = new Swiper('#pages-swiper', Object.assign({}, swiperOptions, {
		'width': 0x140
	}));
});
$$(document).on('page:init', '.page[data-name="slider-2"]', function(_0x4e2853) {
	var _0x470415 = new Swiper("#pages-swiper2", Object.assign({}, swiperOptions, {
		'width': 0x104
	}));
});
$$(document).on("page:init",'.page[data-name="slider-3"]', function(_0x1a7936) {
	var _0x1b649f = new Swiper("#pages-swiper3", Object.assign({}, swiperOptions, {
		'width': 0x168
	}));
});
$$(document).on("page:init", '.page[data-name="slider-4"]', function(_0x207eed) {
	var _0x4065f7 = new Swiper('#pages-swiper4', Object.assign({}, swiperOptions, {
		'width': 0x118
	}));
});
$$(document).on("page:init", '.page[data-name="pull-to-refresh"]', function(_0x175106) {
	$$("#pages-ptr").on("ptr:refresh", function(_0x175106) {
		setTimeout(function() {
			var _0x1bff79 ='<li>'+ '<a href="/single/">' + '<div class="item-content">' + '<div class="item-media"><img src="img/thumb-25.jpg" width="44"/></div>' + _0x48bd('0x6d') + '<div class="item-subtitle">Fashion</div>' + '<div class="item-title">The Best Diet for a Flatter Belly</div>' 
			+ '<div class="item-subtitle bottom-subtitle"><i class="icon ion-md-time"></i>2 hours ago</div>' + '</div>' +'</div>' + '</a>' +'</li>';
			$$('#pages-ptr').find("#pages-ptr-list").prepend(_0x1bff79);
			app.ptr.done($$("#pages-ptr"));
		}, 0x3e8);
	});
});

$$(document).on("page:init",'.page[data-name="infinite-scroll"]', function(_0x1af19a) {
	var _0x37812e = !! [];
	$$("#pages-infinite-scroll").on("infinite", function() {
		if (!_0x37812e) return;
		_0x37812e = ![];
		setTimeout(function() {
			_0x37812e = !! [];
			var _0x2fc8a8 = '<li>' + '<a href="/single/">'+ '<div class="item-content">' + '<div class="item-media"><img src="img/thumb-26.jpg" width="44"/></div>' 
			+ '<div class="item-inner">' + '<div class="item-subtitle">Fashion</div>' +'<div class="item-title">The Best Diet for a Flatter Belly</div>' 
			+ '<div class="item-subtitle bottom-subtitle"><i class="icon ion-md-time"></i>2 hours ago</div>' +'</div>' + '</div>' + '</a>' + '</li>';
			$$("#pages-infinite-scroll-list").append(_0x2fc8a8);
			app.infiniteScroll.destroy("#pages-infinite-scroll");
			$$("#pages-infinite-scroll .infinite-scroll-preloader").remove();
		}, 0x320);
	});
});
var shareActions = app.actions.create({
	'buttons': [
		[{
			'text': "Share this on:",
			'label': !! []
		}, {
			'text': "Facebook",
			'bold': !! [],
			'onClick': function() {
				window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A//themeforest.net","_blank");
			}
		}, {
			'text': "Twitter",
			'bold': !! [],
			'onClick': function() {
				window.open("http://twitter.com/share?text=Welcome%20To%20Yui&url=http://themeforest.net&hashtags=template,mobile", 
				"_blank");
			}
		}, {
			'text':"Mail",
			'bold': !! [],
			'onClick': function() {
				window.open("mailto:someone@example.com?Subject=Hello", "_blank");
			}
		}],
		[{
			'text':"Cancel",
			'color': 'red'
		}]
	]
});
$$(".share-actions").on("click", function() {
	shareActions.open();
	parent.shareActions();
});
shareActions.on("close", function() {
	parent.shareActions();
});
var myNotification = app.notification.create({
	'icon':'<i class="icon ion-ios-notifications"></i>',
	'title': "Yui Template",
	'subtitle': 'This is a mobile notification',
	'text': "Click (x) button to close me",
	'closeButton': !! []
});
$$(".open-notification").on("click", function() {
	myNotification.open();
});
var toggleTheme = app.toggle.get(".toggle-theme");
toggleTheme.on("change", function() {
	$$("body").toggleClass("theme-dark");
	parent.toggleTheme();
});
var currentTheme = "color-theme-pink";
$$('[name="radio-color-theme"]').on("change", function(_0x51fcc6) {
	var _0x30d6d4 = $$('[name="radio-color-theme"]:checked').attr('id');
	$$('body').toggleClass(currentTheme + ' ' + _0x30d6d4);
	currentTheme = _0x30d6d4;
});
$$(document).on("page:init", '.page[data-name="single"]', function(_0x3c1659, _0x4e8288) {
	parent.hideStatus();
});
$$(document).on("page:beforeout", '.page[data-name="single"]', function(_0x4b5f9d, _0xfaafb5) {
	var _0x1ffb89 = _0x4b5f9d.detail.router.url;
	if (_0x1ffb89 !="/single/" && _0x1ffb89 != "/single-2/" && _0x1ffb89 !="/author/" && _0x1ffb89 !="/contact/" && app.views.current.selector != "#view-discover") {
		parent.showStatus();
	}
});
$$(document).on("page:init",'.page[data-name="single-2"]', function(_0x2738e7, _0x4aa115) {
	parent.hideStatus();
});
$$(document).on("page:beforeout", '.page[data-name="single-2"]', function(_0x35a005, _0x37ad99) {
	var _0x3aa1b1 = _0x35a005.detail.router.url;
	if (_0x3aa1b1 != "/single/" && _0x3aa1b1 != "/single-2/" && _0x3aa1b1 != "/author/" && _0x3aa1b1 != "/contact/" && app.views.current.selector != "#view-discover") {
		parent.showStatus();
	}
});
$$(document).on("page:init", '.page[data-name="author"]', function(_0x4fff8b, _0x37a567) {
	parent.hideStatus();
});
$$(document).on('page:beforeout','.page[data-name="author"]', function(_0x5092e8, _0x2ad787) {
	var _0x43e15b = _0x5092e8.detail.router.url;
	if (_0x43e15b != "/single/" && _0x43e15b !="/single-2/" && _0x43e15b != "/author/" && _0x43e15b != "/contact/" && app.views.current.selector != "#view-discover") {
		parent.showStatus();
	}
});
$$(document).on("page:init", '.page[data-name="contact"]', function(_0x1dcbf3, _0x2f668e) {
	parent.hideStatus();;
});
$$(document).on('page:beforeout', '.page[data-name="contact"]', function(_0x209184, _0x2596d6) {
	var _0x4d6440 = _0x209184.detail.router.url;
	if (_0x4d6440 != "/single/" && _0x4d6440 != "/single-2/" && _0x4d6440 != "/author/" && _0x4d6440 != "/contact/" && app.views.current.selector != "#view-discover") {
		parent.showStatus();
	}
});
$$(".view").on("tab:show", function(_0x15271e) {
	var _0x426de7 = _0x15271e.srcElement.id;
	if (_0x426de7 == "view-discover") {
		parent.hideStatusFast();
	} else {
		var _0x31d83f = app.views.current.router.url;
		if (_0x31d83f == "/single/" || _0x31d83f == '/single-2') {
			parent.hideStatusFast();
		} else {
			parent.showStatusFast();
		}
	}
});
$$(".view").on("tab:hide", function(_0x8dfda5) {
	var _0x28f58b = _0x8dfda5.srcElement.id;
	if (_0x28f58b == 'view-discover') {
		parent.showStatusFast();
	} else {
		parent.hideStatusFast();
	}
});