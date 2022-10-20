let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        // console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://www.logic-square.com/contest-banner.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status : ${contests[item].status}</p>
                                        <p class="card-text"> Site : ${contests[item].site}</p>
                                        <p class="card-text"> in 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})