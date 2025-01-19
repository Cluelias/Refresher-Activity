const formInputs = document.querySelectorAll('.form-control');
const progressBar = document.getElementById('formProgress');

formInputs.forEach(input => {
  input.addEventListener('input', function() {
    validateInput(this);
  });
});

function validateInput(input) {
  const value = input.value.trim();
  const inputType = input.id.replace('Input', '');
  const regexPatterns = {
    FullName: /^[a-zA-Z\s]*$/,
    age: /^\d+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    dob: /^.*\S.*$/,
  };

  if (value === '' && inputType === 'FullName') {
    input.classList.remove('is-valid', 'is-invalid');
  } else if (regexPatterns[inputType].test(value)) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
  updateProgressBar();
}

function updateProgressBar() {
  const validInputs = Array.from(formInputs).filter(input => input.classList.contains('is-valid'));
   const progress = (validInputs.length / formInputs.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.innerText = `${progress}%`;
}
