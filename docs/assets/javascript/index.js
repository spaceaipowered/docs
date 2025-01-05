function translateFooter(recursive) {
    const node = document.querySelector(".md-copyright")

    node.innerHTML = `
        <div class="md-copyright">
            Документация написана для
            <a href="https://github.com/spaceaipowered" target="_blank" rel="noopener">проекта SpaceAI</a>
            с помощью
            <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener">Material for MkDocs</a>
        </div>
    `

    if ( !recursive ) {
        const config = { childList: true, subtree: true, characterData: true }

        const callback = function(mutationsList, observer) {
            console.log("mutation detected")
            for (let mutation of mutationsList) {
                if (mutation.type === "childList" || mutation.type === "characterData") {
                    translateFooter(true)
                }
            }
        }

        const observer = new MutationObserver(callback)
        observer.observe(node, config)

        console.log("created observer for footer mutations")
    }
}

function processRequiredMark() {
    const elements = document.querySelectorAll("code[required=\"1\"]")

    elements.forEach((element) => {
        const span = document.createElement("span")
        span.style.color = "#ff8e8e"
        span.textContent = "*"

        element.insertAdjacentElement("afterbegin", span)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    // translateFooter(false)
    processRequiredMark()
})
