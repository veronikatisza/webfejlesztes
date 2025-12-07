function finishQuiz() {
    const correctAnswers = {
        q1: "77",
        q2: "roy",
        q3: "feher",
        q4: "angels",
        q5: "95",
        q6: "elit",
        q7: "Adriana",
        q8: "Barbara",
        q9: "19",
        q10:"Grande"
    };

    let score = 0;
    let total = 10;

    for (let i = 1; i <= total; i++) {
        let name = "q" + i;
        let selected = document.querySelector(`input[name="${name}"]:checked`);

        if (!selected) {
            document.getElementById("resultText").innerText =
                "Hiba: nem válaszoltál minden kérdésre!";
            return;
        }

        if (selected.value === correctAnswers[name]) {
            score++;
        }
    }

    document.getElementById("resultText").innerText =
        `Eredményed: ${score} / ${total} pont`;
}