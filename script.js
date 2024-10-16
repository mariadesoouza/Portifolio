function openWhatsApp(){

    const numero = 5548998673404;
    const mensagem = "Olá, gostaria de falar com você"

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`
        window.open(url, '_blank');
}
    
    