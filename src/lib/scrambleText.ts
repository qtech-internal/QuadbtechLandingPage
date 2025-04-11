export function ScrambleTextEffect(element: HTMLElement, finalText: string): Promise<void> {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let iterations = 0;
    let frameId: number;

    return new Promise((resolve) => {
        const scramble = () => {
            let output = "";

            for (let i = 0; i < finalText.length; i++) {
                if (i < iterations) {
                    output += `<span style="color: black;">${finalText[i]}</span>`;
                } else {
                    const randomChar = chars[Math.floor(Math.random() * chars.length)];
                    output += `<span style="color: orange; opacity:0.45
          ; font-weight: bold;">${randomChar}</span>`;
                }
            }

            element.innerHTML = output;

            if (iterations < finalText.length) {
                iterations += 1 / 5;
                frameId = requestAnimationFrame(scramble);
            } else {
                cancelAnimationFrame(frameId);
                resolve(); // 👈 resolve the Promise when done
            }
        };

        scramble();
    });
}
