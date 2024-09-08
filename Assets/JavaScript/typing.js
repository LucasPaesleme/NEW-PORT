document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".second-text", {
        speed: 130,
        loop: true
    }).type('desenvolvedor web.', {delay: 900}).delete(18).type('FreeLancer.', {delay: 400})

    .go()
})