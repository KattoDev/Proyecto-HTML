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

export class catDoStuff {
    constructor() {
        this.windowRef = null;
    }
    mew() {
        this.windowRef = window.open("/the-forbiden");
        setTimeout(() => {
            this.windowRef.close();
        }, 1200);
    }
}

export function printPage() {
    setTimeout(window.print(), 3000);
}
