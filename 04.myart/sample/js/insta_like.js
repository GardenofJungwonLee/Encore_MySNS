function touchLike(id) {
    // id값을 통해 통제할 element 지정
    const el = document.getElementById(id)
    // 등록시간, 별명, 댓글 내용을 array로 저장
    // 로컬 스토리지에 저장된 해당 key값의 value가 null이다 = 기존 댓글 데이터가 없다
    const countId = "count" + id.substr(id.length - 1);
    if (!localStorage.getItem(id)) {
        localStorage.setItem(id, "t")
        localStorage.setItem(countId, +localStorage.getItem(countId) + 1)
    } else if (localStorage.getItem(id) == "f") {
        localStorage.setItem(id, "t")
        localStorage.setItem(countId, +localStorage.getItem(countId) + 1)
    } else {
        localStorage.setItem(id, "f")
        localStorage.setItem(countId, +localStorage.getItem(countId) - 1)
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
    likeCount("count" + id.substr(id.length - 1))
}

function likeCount(id, init) {
    if (!localStorage.getItem(id)) localStorage.setItem(id, init);
    document.getElementById(id).innerHTML = localStorage.getItem(id).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

likeCount("count1", 341)
likeCount("count2", 1157)
drawLike("like1")
drawLike("like2")