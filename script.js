document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'a'
    };
    
    let score = 0;

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                score++;
            }
        }
    }

    const results = document.getElementById('results');
    results.textContent = `You scored ${score} out of ${Object.keys(answers).length}!`;

});
