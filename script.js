document.getElementById('quotePlaceholder').onclick = function () {
    const quoteContent = `
        <p class="p_jv">
            "Death is not a hunter unbeknownst to its prey. One is always aware that it lies in wait. Though life is merely a journey to the grave, it must not be undertaken without hope. Only then will a traveler's story live on, cherished by those who bid him farewell."
            <br><br>- Persona 3
        </p>`;
    const imageHtml = '<img class="jv" src="images/gun.png"/>';
    this.innerHTML = this.innerHTML.includes('img') ? quoteContent : imageHtml;
};

document.getElementById('quotePlaceholder_2').onclick = function () {
    const quoteContent = `
        <p class="p_jv">
            "Don’t avert your eyes from the truth, no matter how hard it is to see. Accepting the truth is difficult, whether it be about yourself or other people, but you have to accept that nonetheless in order to move forward."
            <br><br>- Persona 4
        </p>`;
    const imageHtml = '<img class="jv_2" src="images/card.png"/>';
    this.innerHTML = this.innerHTML.includes('img') ? quoteContent : imageHtml;
};

document.getElementById('quotePlaceholder_3').onclick = function () {
    const quoteContent = `
        <p class="p_jv">
            "There is no such thing as reality. The world is an amalgam of subjective experiences; it quite literally ends with your perception. You have so much more potential than you think, and the power to change things for the better, so, wake up, get up, get out there."
            <br><br>- Persona 5
        </p>`;
    const imageHtml = '<img class="jv_3" src="images/mask.png"/>';
    this.innerHTML = this.innerHTML.includes('img') ? quoteContent : imageHtml;
};

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1,
    });

    const images = document.querySelectorAll('.u-image');
    images.forEach((img) => observer.observe(img));
});

var modal = document.getElementById('welcomeModal');
var span = document.getElementsByClassName("close")[0];

window.onload = function () {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }, 10);
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
        const input = dropdown.querySelector('input[type="checkbox"]');
        const container = dropdown.querySelector('.dropdown-container');

        if (input && container) {
            input.addEventListener('change', () => {
                if (input.checked) {
                    container.style.maxHeight = container.scrollHeight + 'px';
                } else {
                    container.style.maxHeight = '0';
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        const isDropdown = event.target.closest('.dropdown');
        document.querySelectorAll('.dropdown input[type="checkbox"]').forEach((input) => {
            if (!isDropdown || !isDropdown.contains(input)) {
                input.checked = false;
                const container = input.closest('.dropdown').querySelector('.dropdown-container');
                if (container) {
                    container.style.maxHeight = '0';
                }
            }
        });
    });
});
