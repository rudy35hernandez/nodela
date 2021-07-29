/// use the delete button to remove user's posts
const deleteBtn = document.querySelectorAll('.del')
const deleteComment = document.querySelectorAll('.del-comment')

Array.from(deleteBtn).forEach((el) => {
	el.addEventListener('click', deletePost)
})

Array.from(deleteComment).forEach((el)=> {
	el.addEventListener('click', deleteComment)
})


/// function that links to delete request

async function deletePost(){
	
	const postId = this.parentNode.parentNode.dataset.id
	console.log(postId)

	try{
		const response = await fetch('posts/deletePost', {
			method: 'delete',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				'postIdFromJSFile': postId
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()
	}
	catch(err){
		console.log(err)
	}
}

async function deleteComment(){
	const commentId = this.parentNode.parentNode.dataset.id
	console.log(commentId)

	try{
		const response = await fetch('/deleteComment', {
			method: 'delete',
			headers: {'Content-type' : 'application/json'},
			body: JSON.stringify({
				'postIdFromJSFile': commentId
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()
	} catch(err){
		console.log(err)
	}
}
















/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);