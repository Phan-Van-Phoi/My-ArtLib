const chon1 = document.querySelector('.chon1');
const chon2 = document.querySelector('.chon2');
const chon3 = document.querySelector('.chon3');
const chon4 = document.querySelector('.chon4');

chon1.addEventListener('click', function () {
    chon1.style.backgroundColor = '#334155';
    chon2.style.backgroundColor = '#1E293B';
    chon3.style.backgroundColor = '#1E293B';
    chon4.style.backgroundColor = '#1E293B';
});

chon2.addEventListener('click', function () {
    chon1.style.backgroundColor = '#1E293B';
    chon2.style.backgroundColor = '#334155';
    chon3.style.backgroundColor = '#1E293B';
    chon4.style.backgroundColor = '#1E293B';
});

chon3.addEventListener('click', function () {
    chon1.style.backgroundColor = '#1E293B';
    chon2.style.backgroundColor = '#1E293B';
    chon3.style.backgroundColor = '#334155';
    chon4.style.backgroundColor = '#1E293B';
});

chon4.addEventListener('click', function () {
    chon1.style.backgroundColor = '#1E293B';
    chon2.style.backgroundColor = '#1E293B';
    chon3.style.backgroundColor = '#1E293B';
    chon4.style.backgroundColor = '#334155';
});

let modalNen = document.querySelector('.nen');
let nenHinhAnh = document.querySelector('.nen-anh');
let nenTen = document.querySelector('.nen-ten-san-pham');
let nenMoTa = document.querySelector('.nen-mo-ta');

let nenDinhDang = document.querySelector('.nen-khung strong');

let tatCaTheTaiNguyen = document.querySelectorAll('.the');

for (var i = 0; i < tatCaTheTaiNguyen.length; i++) {
    tatCaTheTaiNguyen[i].addEventListener('click', function () {
        moModalSanPham(this);
    });
}
function moModalSanPham(theDuocClick) {

    let ten = theDuocClick.querySelector('.theTen').textContent;
    let moTa = theDuocClick.getAttribute('data');

    let dinhDang = theDuocClick.querySelector('.theND h3:last-child').textContent;

    let anhTrongThe = theDuocClick.querySelector('.theHinh');
    let duongDanAnh = anhTrongThe.src;

    nenTen.textContent = ten;
    nenDinhDang.textContent = dinhDang;
    nenMoTa.textContent = moTa;
    nenHinhAnh.src = duongDanAnh;

    modalNen.style.display = 'flex';
}

function dongModal() {
    modalNen.style.display = 'none';
}

modalNen.addEventListener('click', function (su_kien) {
    if (su_kien.target === modalNen) {
        dongModal();
    }
});