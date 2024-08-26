export let goto = {
    agenda: () =>
        document
            .getElementById("agenda")
            .scrollIntoView({ behavior: "smooth" }),
    justification: () =>
        document
            .getElementById("justification")
            .scrollIntoView({ behavior: "smooth" }),
    skills: () => window.open("/competencias"),
    income: () =>
        document
            .getElementById("income-profile")
            .scrollIntoView({ behavior: "smooth" }),
    graduate: () =>
        document
            .getElementById("graduation-profile")
            .scrollIntoView({ behavior: "smooth" }),
    methodology: () =>
        document
            .getElementById("methodology")
            .scrollIntoView({ behavior: "smooth" }),
};
