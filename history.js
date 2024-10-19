
    // Function to display current date and time in real-time
    function updateTime() {
        const currentTime = new Date();
        document.getElementById("current-time").textContent = currentTime;
    }
    setInterval(updateTime, 1000);  // Update every second

    // Switching between Donation and History tabs
    const donationTab = document.getElementById('donation-tab');
    const historyTab = document.getElementById('history-tab');
    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');

    donationTab.addEventListener('click', function () {
        donationSection.classList.remove('hidden');
        historySection.classList.add('hidden');
        donationTab.classList.add('bg-green-500', 'text-white');
        historyTab.classList.remove('bg-green-500', 'text-white');
        historyTab.classList.add('bg-gray-300');
    });

    historyTab.addEventListener('click', function () {
        donationSection.classList.add('hidden');
        historySection.classList.remove('hidden');
        historyTab.classList.add('bg-green-500', 'text-white');
        donationTab.classList.remove('bg-green-500', 'text-white');
        donationTab.classList.add('bg-gray-300');
    });
