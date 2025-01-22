// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4
$(document).ready(function() {
    $('input[type="checkbox"]').on('change', function() {
      if ($('input[type="checkbox"]:checked').length === 3) {
        $('input[type="checkbox"]').prop('disabled', true);
      }
    });
  });