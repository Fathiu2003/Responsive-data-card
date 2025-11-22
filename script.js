document.addEventListener('DOMContentLoaded', () => {
    const reportButton = document.querySelector('.view-report-btn');
    
    reportButton.addEventListener('click', () => {
        console.log('Report button clicked! (A real app would fetch data now)');
        alert('Report data is loading...');
    });
});
