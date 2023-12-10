function updateDateTime() {
    const dateTimeContainer = document.getElementById('date-time-container');
    const now = new Date();

    // Format the date and time
    const formattedDateTime = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    // Update the content of the container
    dateTimeContainer.textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();


