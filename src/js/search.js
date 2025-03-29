// This file contains the JavaScript code that handles the functionality of the search bar.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    const jobList = document.getElementById('job-list');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const jobs = jobList.getElementsByTagName('li');

        for (let i = 0; i < jobs.length; i++) {
            const job = jobs[i];
            const textValue = job.textContent || job.innerText;

            if (textValue.toLowerCase().indexOf(filter) > -1) {
                job.style.display = '';
            } else {
                job.style.display = 'none';
            }
        }
    });
});