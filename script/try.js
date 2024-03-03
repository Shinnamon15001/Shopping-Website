function hero() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('close').style.display = 'flex';
}
function show() {
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('close').style.display = 'none';
}

const dataContainer = document.getElementById("data-container");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            console.log(post);
            const postElement = document.createElement("p");
            postElement.textContent  = `
                Post ID: ${post.id} - Title:  ${post.title} - Body: ${post.body}
            `;
        
            dataContainer.appendChild(postElement);
        })
        .catch(error => {
            console.log("Error fetching data : " + error);
        })
    })

