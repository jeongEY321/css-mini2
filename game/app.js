const $gameZone = document.querySelector('.game-zone');
let money = 0; //기본 돈
const plMon = setInterval(() => { //시간지날때마다 돈 들어오기
    money += 50;
}, 1000);

let i = 1; //소환 개수
let death = 0;
let countHe = 0;

let poX = []; //몬스터 위치
let aa = -20; //몬스터 생길때마다 더 뒤로 생성
for (let i = 0; i < 10; i++) { //값 넣어주기
    poX[i] = aa;
    aa -= 47;
}

let HP = []; //몬스터 피통 저장

//몬스터 생성
const newMon = setInterval(() => {
    const num = Math.floor((Math.random() * 4) + 1); // 생성될때마다 몬스터 라인 설정

    const $monImg = document.createElement('img');
    $gameZone.appendChild($monImg);
    $monImg.src = './img/enemys/Mushy.gif';
    $monImg.style.position = 'absolute';
    $monImg.classList.add(`monster`, `line${num}`, `new${i}`);
    $monImg.style.width = '15%';
    $monImg.style.height = '18%';
    $monImg.style.left = '-20%';
    HP[i - 1] = 10; //피통 배열에 저장

    // 자리 배치해주기
    let poY = 0;
    if (num === 1) {
        poY = 5;
    } else if (num === 2) {
        poY = 30;
    } else if (num === 3) {
        poY = 55;
    } else if (num === 4) {
        poY = 80;
    }
    $monImg.style.left = `${poX}%`;
    $monImg.style.top = `${poY}%`;
    if (i === 10) { // 소환 정지
        clearInterval(newMon);
    }
    i++;
    console.log(i); //확인용

}, 500);

const afda = setTimeout(() => {
    const $monster = [...document.querySelectorAll('.monster')];
    // console.log(HP); 배열 잘 들어갔는지 확인

    const tlrks = setInterval(() => {
        for (let i = 0; i < 10; i++) {
            $monster[i].style.left = `${poX[i]+1}%`;
            poX[i] += 1;

            // 게임 end
            if (poX[i] > 84) {
                clearInterval(tlrks);
                alert('패배!!');
            }
        }
    }, 380);

    clearInterval(afda); //10초뒤에 시작하고 한번만 돌게 설정.
}, 10000);
