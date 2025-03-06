document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.style.transform = "rotate(0deg)";
            } else {
                // Close other open items
                document.querySelectorAll(".faq-answer").forEach((item) => {
                    item.style.display = "none";
                });

                document.querySelectorAll(".icon").forEach((icon) => {
                    icon.style.transform = "rotate(0deg)";
                });

                // Open current one
                answer.style.display = "block";
                icon.style.transform = "rotate(45deg)";
            }
        });
    });
});
