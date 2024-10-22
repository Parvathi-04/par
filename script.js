// Function to show the Naming Ceremony section when Nihanth's picture is clicked
function showCeremony() {
    document.getElementById('ceremony').classList.remove('hidden');
    document.getElementById('ceremony').scrollIntoView({
        behavior: 'smooth'
    });
}