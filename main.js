// chọn tất cả ảnh trong gallery
const galleryImgs = document.querySelectorAll('.gallery img');

// tạo phần modal động
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

// khi click ảnh -> hiển thị modal
galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});

// khi click ra ngoài ảnh -> đóng modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});