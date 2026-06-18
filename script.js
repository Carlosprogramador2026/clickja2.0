const WHATSAPP_PHONE = "5511945394595";

function buildWhatsAppLink(button) {
    const productBlock = button.closest(".product-card, .status-card, .contact-card");
    const heroBlock = button.closest(".hero-panel");
    const title = productBlock?.querySelector("h3, strong")?.textContent?.trim();
    const price = productBlock?.querySelector(".product-meta strong, .status-price")?.textContent?.trim();
    const image = productBlock?.querySelector("img") || heroBlock?.querySelector("img");
    const imageUrl = image ? new URL(image.getAttribute("src"), window.location.href).href : "";

    const messageLines = [
        "Olá! Tenho interesse neste produto:",
        title ? `Produto: ${title}` : "",
        price ? `Preço: ${price}` : "",
        imageUrl ? `Foto: ${imageUrl}` : "",
    ].filter(Boolean);

    button.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    button.target = "_blank";
    button.rel = "noopener";

    button.addEventListener("click", () => {
        gtag('event', 'conversion', {
            'send_to': 'AW-18248241205/RmSxCLa09cAcELWguP1D'
        });
    });
}

document.querySelectorAll(".WhatsApp-button").forEach(buildWhatsAppLink);
