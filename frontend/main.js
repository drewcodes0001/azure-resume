window.addEventListener('DOMContentLoaded', (event) => { // When the content is loaded run this event
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => { // API Call
        return response.json();
    }).then(response => { 
        console.log("Website called function API.")
        count = response.count; // Set count to whatever was grabbed from the JSON response
        document.getElementById("counter").innerText = count; // Sets the element to count
    }).catch(function(error){
        console.log(error);
    });

    return count;
}