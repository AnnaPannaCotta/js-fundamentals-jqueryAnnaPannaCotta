// На HTML-сторінці є посилання <a>. У випадку коли, 
// href починається на https://,
// потрібно додати посиланню атрибут target="_blank".

// Завдання виділене вставкою Task2

$(document).ready(function() {
    $('a[href^="https://"]').attr('target', '_blank');
  });