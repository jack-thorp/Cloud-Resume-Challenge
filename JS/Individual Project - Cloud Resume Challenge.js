window.addEventListener('DOMContentLoaded', (event) => {
    /*Visitor Counter*/
    async function getViewCounter() {
        let response = await fetch("https://n61igzlb3g.execute-api.us-east-1.amazonaws.com/jack-thorp_site/siteview?event=GETCOUNT");
        return response;
    }
    var viewCount = getViewCounter();
    console.log(viewCount);
});