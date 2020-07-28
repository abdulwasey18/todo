const searchForm = document.getElementById("searchForm");
const apiURL = "https://api.github.com/users/"

const following = document.getElementById("following")
const followers = document.getElementById("followers")
const organization = document.getElementById("org")
const loc = document.getElementById("location")
const profileimage = document.getElementById("profileimg")
const username = document.getElementById("username")
const blog = document.getElementById("blog")
const gists = document.getElementById("gists")
const repos = document.getElementById("repos")
const bio = document.getElementById("bio")

searchForm.onsubmit = function(event) {
    event.preventDefault();
    let formData = new FormData(searchForm);
    fetch(apiURL + formData.get("profilename"))
        .then(function(response) {
            response.json()
                .then(function(data) {
                    console.log(data)
                    following.innerText = data.following;
                    followers.innerText = data.followers;
                    organization.innerText = data.company ? data.company : "N/A";
                    loc.innerText = data.location;
                    profileimage.src = data.avatar_url;
                    username.innerText = data.name;
                    blog.innerText = data.blog;
                    gists.innerText = data.gists;
                    repos.innerText = data.repos;
                    bio.innerText = data.bio;
                })
                .catch(function(error) {
                    console.log(error);
                })
        })
        .catch(function(error) {
            console.log(error);
        })

}