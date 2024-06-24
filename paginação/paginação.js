const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGN3emRpZDBzc3ZvejZ5OTlib2xqZXY1NnVkeGZzMGx3NHpucDR2cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XVYTleCiGcQb7ClgyY/giphy.gif",
    "https://media.giphy.com/media/fQobuGHsyx4ctkZvqQ/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/GA9ZmWJf46esh9kPc9/giphy.gif?cid=ecf05e47sswpbur1jgjdf4n0p29puxih9hjw7d2te9176ydz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ZdmDwjyKJekhCR4RK4/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/hSLfmcaoLe2D2IBSNN/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xUPGcp0H0CMo0WQone/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ui1dKgA2i0rdaQcwoe/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/dKg7kqSLxTZ8A/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/fRJxL9D36l6q7hOgjI/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/BZ8M3HLrLXASdVFfL3/giphy.gif?cid=790b76114cwzdid0ssvoz6y99boljev56udxfs0lw4znp4vq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);