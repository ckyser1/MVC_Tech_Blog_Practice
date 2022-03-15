const newPost = async(e) => {
    e.preventDefault();

    const post_title = document.querySelector('#post-title').value.trim();
    const post_bio = document.querySelector('#post-bio').value.trim();

    if (post_title && post_bio) {
        const response = await fetch('/api/post/newPosting', {
            method: 'POST',
            body: JSON.stringify({post_title, post_bio}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    if (response.ok) {
        document.location.replace('/userProfile')
    } else {
        alert('fail')
    }}
}

document
    .addEventListener('submit', newPost)