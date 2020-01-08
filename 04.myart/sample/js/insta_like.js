function touchLike(id) {
    // id값을 통해 통제할 element 지정
    const el = document.getElementById(id)
    // 등록시간, 별명, 댓글 내용을 array로 저장
    // 로컬 스토리지에 저장된 해당 key값의 value가 null이다 = 기존 댓글 데이터가 없다
    if (!localStorage.getItem(id)) {
        localStorage.setItem(id, "t")
    } else if (localStorage.getItem(id) == "f") {
        localStorage.setItem(id, "t")
    } else {
        localStorage.setItem(id, "f")
    }
    drawLike(id)
}

function drawLike(id) {
    console.log("좋아요 그립니다")
    el = document.getElementById(id)
    if(localStorage.getItem(id) == "f") {
        document.getElementById(id).classList.add('like-empty');
        document.getElementById(id).classList.remove('like-full');
    } else {
        document.getElementById(id).classList.add('like-full');
        document.getElementById(id).classList.remove('like-empty');
    }
}