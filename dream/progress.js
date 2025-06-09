window.onload = function() {
    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(bar => {
        const target = parseInt(bar.getAttribute('data-progress'), 10) || 0;
        let width = 0;

        const interval = setInterval(() => {
            if (width >= target) {
                clearInterval(interval);
                
                if (width === 100) {
                    bar.textContent = 'Terminé / Polish';
                    bar.style.color = '#fff';
                    bar.style.fontWeight = 'bold';
                    bar.style.textAlign = 'center';
                    bar.style.paddingRight = '0';
                    bar.style.fontSize = '10px';
                    bar.style.textShadow = '1px 1px 2px rgba(0,0,0,0.7)';
                    bar.style.letterSpacing = '1px';
                }

            } else {
                width++;
                bar.style.width = width + '%';

                if (width < 40) {
                    bar.style.backgroundColor = '#666666';
                } else if (width < 70) {
                    bar.style.backgroundColor = '#ffc107';
                } else {
                    bar.style.backgroundColor = '#28a745';
                }

                bar.textContent = '';
            }
        }, 10);
    });
};
