
        // Initial Total Balance
        let totalBalance = 5500;

        // Donation and History Tab Switching
        const donationTab = document.getElementById('donation-tab');
        const historyTab = document.getElementById('history-tab');
        const donationSection = document.getElementById('donation-section');
        const historySection = document.getElementById('history-section');
        const historyList = document.getElementById('history-list');

        // Switch to Donation Section
        donationTab.addEventListener('click', () => {
            donationSection.classList.remove('hidden');
            historySection.classList.add('hidden');
            donationTab.classList.add('bg-green-500', 'text-white');
            historyTab.classList.remove('bg-green-500', 'text-white');
            historyTab.classList.add('bg-gray-300');
        });

        // Switch to History Section
        historyTab.addEventListener('click', () => {
            donationSection.classList.add('hidden');
            historySection.classList.remove('hidden');
            historyTab.classList.add('bg-green-500', 'text-white');
            donationTab.classList.remove('bg-green-500', 'text-white');
            donationTab.classList.add('bg-gray-300');
        });

        // Donation Functionality
        function donate(inputId) {
            const amount = document.getElementById(inputId).value;
            const totalBalanceElement = document.getElementById('total-balance');

            if (amount > 0) {
                totalBalance -= parseInt(amount);
                totalBalanceElement.textContent = `${totalBalance} BDT`;
                
                // Add to history
                let description;
                if (inputId === 'noakhali-donation') {
                    description = `Donated ${amount} BDT for Flood Relief at Noakhali`;
                } else if (inputId === 'feni-donation') {
                    description = `Donated ${amount} BDT for Flood Relief in Feni`;
                } else if (inputId === 'quota-donation') {
                    description = `Donated ${amount} BDT for Aid in Quota Movement`;
                }

                // Create history entry
                const li = document.createElement('li');
                li.classList.add('border-b', 'py-2');
                li.textContent = description;
                historyList.appendChild(li);

                // Clear input
                document.getElementById(inputId).value = '';
            } else {
                alert('Please enter a valid donation amount.');
            }
        }
    