window.addEventListener('DOMContentLoaded', (event) => {
    /*Visitor Counter*/
    async function getViewCounter() {
        let responseData = '';
        let response = await fetch("https://n61igzlb3g.execute-api.us-east-1.amazonaws.com/jack-thorp_site/siteview?event=GETCOUNT")
        .then(response => response.json())
        .then(data => responseData = data);
        return responseData.views;
    }

    async function updateViewCounter() {
        try {
            let viewCount = await getViewCounter();
            if (viewCount !== null) {
                document.querySelector('.infoBottom').textContent = viewCount;
            } else {
                document.querySelector('.infoBottom').textContent = 'Error';
            }
        } catch (error) {
            console.error('Error updating view counter:', error);
            document.querySelector('.infoBottom').textContent = 'Error';
        }
    }
    
    updateViewCounter();
});