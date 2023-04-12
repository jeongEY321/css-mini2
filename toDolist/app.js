const $input = document.querySelector('.box input');
const $btn = document.querySelector('.box-bu');
const $list = document.querySelector('.new');

// 일정 작성
document.addEventListener('click', e => {
    if (e.target.matches('.lnr-plus-circle') || e.target.matches('.box-bu')) {
        if ($input.value === '') {
            $input.placeholder = '공백을 적을 수 없습니다!';
            $input.style.background = 'orangered';

        } else {
            $input.placeholder = '할 일을 입력하세요';
            $input.style.background = 'rgb(176, 174, 174)';

            //ul 추가
            const $ul = document.createElement('ul');
            $ul.classList.add('inner-new');
            $list.appendChild($ul);
            
            //ul안에 input(할일)추가
            const $newLi = document.createElement('input');
            $newLi.classList.add('gkfdlf');
            $newLi.classList.add('changeTP');
            $newLi.value = $input.value;
            $newLi.type = 'button';
            $newLi.style.width = '75%';
            $newLi.style.textAlign = 'none';
            $newLi.style.overflow = 'hidden';
            $ul.appendChild($newLi);

            //할일 앞에 체크박스 만들기
            $newLi.insertAdjacentHTML('beforebegin', '<input class="new-chec" type="checkbox">');

            //할일 다음 내용바꾸기 버튼 만들기
            const $change = document.createElement('button');
            $change.type = 'button';
            $change.classList.add('ch-btn');
            $ul.appendChild($change);
            

            //버튼 안에 아이콘 만들기
            $change.insertAdjacentHTML('afterbegin', '<span class="lnr lnr-undo cha"></span>');
            $change.style.color = 'green';

            //삭제버튼 만들기
            const $remove = document.createElement('button');
            $remove.type = 'button';
            $remove.classList.add('remove');
            $remove.style.color = 'red';
            $ul.appendChild($remove);

            //삭제버튼 안에 아이콘 만들기
            $remove.insertAdjacentHTML('afterbegin', '<span class="lnr lnr-cross-circle rem"></span>');

            $input.value = '';
        }
    }
});

//엔터 누르면 작동
$input.addEventListener('keyup', e => {
    if(e.key === 'Enter') {
        e.preventDefault();
        $btn.click();
    }
});

document.addEventListener('click', e => {

    //체크하면 줄긋기
    if (e.target.matches("input.new-chec")) {
        const $gkfdlf = [...document.querySelectorAll('.gkfdlf')];
        if (e.target.checked) {
            for (let $ele of $gkfdlf) {
                if (e.target.nextElementSibling === $ele) {
                    $ele.style.textDecoration = 'line-through';
                }
            }
        } else {
            for (let $ele of $gkfdlf) {
                if (e.target.nextElementSibling === $ele) {
                    $ele.style.textDecoration = 'none';
                }
            }
        }
    }

    //추가한거 내용 바꾸기
    if(e.target.matches('.lnr-undo')) {
        const $gkfdlf = [...document.querySelectorAll('.gkfdlf')];
        const $cha = [...document.querySelectorAll('.cha')];
        for(let $ele of $gkfdlf) {
            if(e.target.parentNode.previousElementSibling === $ele) {
                $ele.type = 'text';
            }
        }
        
        for(let $ele of $cha) {
            if(e.target === $ele) {
                $ele.classList.toggle('lnr-undo');
                $ele.classList.toggle('lnr-checkmark-circle');
            }
        }
    }

    else if(e.target.matches('.lnr-checkmark-circle')) {
        const $gkfdlf = [...document.querySelectorAll('.gkfdlf')];
        const $cha = [...document.querySelectorAll('.cha')];
        for(let $ele of $gkfdlf) {
            if(e.target.parentNode.previousElementSibling === $ele) {
                $ele.type = 'button';
            }
        }
        
        for(let $ele of $cha) {
            if(e.target === $ele) {
                $ele.classList.toggle('lnr-undo');
                $ele.classList.toggle('lnr-checkmark-circle');
            }
        }
    }

    //내용 삭제
    if(e.target.matches('.lnr-cross-circle')) {
        const $rem = [...document.querySelectorAll('.rem')];
        for(let $ele of $rem) {
            if(e.target === $ele) {
                $ele.parentNode.parentNode.style.background = 'orangered';
                $ele.parentNode.parentNode.style.animation = 'bye 1.5s ease-in-out';
                const func = setTimeout(() => {
                    $ele.parentNode.parentNode.remove();
                    clearInterval(func);
                }, 600);
            }
        }
    }
});