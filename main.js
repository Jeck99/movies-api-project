// http://api.tvmaze.com/search/shows?q=rick
// https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=home
let baseApi = "http://api.tvmaze.com/search/shows?q=";
let apiResults={};
function getIconssApi(iconToSearch) {
    return fetch(`${baseApi}${iconToSearch}`)
        .then(res => res.json())
        .catch(rej => console.log(rej))
}
function getMoviesOrShowsApi(inputFromUser, caterguryParam) {
    return fetch(`${baseApi}search/${caterguryParam}?q=${inputFromUser}`)
        .then(res => res.json())
        .catch(rej => console.log(rej))
}
async function getIcons(inputValue) {
    try {
        resultsDiv.innerHTML = `<img src="loading.gif" alt="loading-anime" >`
        await getIconssApi(inputValue)
            .then(res => { apiResults = res })
    }
    catch (error) {
        console.log(error);
    }
    finally {
        resultsDiv.innerHTML = '';
    }
}

function searchClick() {
    getIcons(searchInput.value)
    .then(() => {
            for (const iterator of apiResults) {
                resultsDiv.innerHTML += 
                `<img src="${iterator.show.image.medium}" alt="loading-anime" >`
            }
        })
}
function postApi(data) {
    const options = {
        method:"POST",
        body:JSON.stringify({movie:data})
    }
    return fetch("http://api.tvmaze.com/search/shows",options)
        .then(res => res.json())
        .catch(rej => console.log(rej))
}
function postClick() {
    postApi(inputId.value)
}
