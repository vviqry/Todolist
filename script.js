document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Fungsi untuk memuat status dari localStorage saat halaman dimuat
    checkboxes.forEach(checkbox => {
        const taskId = checkbox.id;
        const savedStatus = localStorage.getItem(taskId);
        if (savedStatus === 'true') {
            checkbox.checked = true;
            checkbox.nextElementSibling.classList.add('completed');
        }

        // Simpan status ke localStorage saat checkbox diubah
        checkbox.addEventListener('change', () => {
            const label = checkbox.nextElementSibling;
            if (checkbox.checked) {
                label.classList.add('completed');
                localStorage.setItem(taskId, 'true');
            } else {
                label.classList.remove('completed');
                localStorage.setItem(taskId, 'false');
            }
        });
    });
});