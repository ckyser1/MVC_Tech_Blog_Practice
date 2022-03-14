
const searchData = async (e) => {
    e.preventDefault();
    const searchData = document.querySelector('#searchText').value.trim();
    console.log(searchData)
    // if (searchData) {
    //     const response = await fetch('/api/users/search/'+ searchData, {
    //         method: 'GET'
            
    //     })
    //     if(response.ok) {
            document.location.replace('/search/'+searchData)    
        // } else {
        //     alert('fail')
        // }}
}

document
document.getElementById('searchSubmit').addEventListener('click', searchData);