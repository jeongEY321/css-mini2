const $gameZone = document.querySelector('.game-zone');
let money = 0; //기본 돈
const plMon = setInterval(() => { //시간지날때마다 돈 들어오기
    money += 50;
}, 1000);

let i = 1; //소환 개수
let death = 0; //몬스터 죽은 수
let countHe = 0;

let poX = []; //몬스터 위치
let aa = -20; //몬스터 생길때마다 더 뒤로 생성
for (let i = 0; i < 10; i++) { //값 넣어주기
    poX[i] = aa;
    aa -= 47;
}

let HP = []; //몬스터 피통 저장

let want = 1;


//몬스터 생성
const newMon = setInterval(() => {
    const num = Math.floor((Math.random() * 4) + 1); // 생성될때마다 몬스터 라인 설정

    const $monImg = document.createElement('img');
    $gameZone.appendChild($monImg);
    $monImg.src = './img/enemys/Mushy.gif';
    $monImg.style.position = 'absolute';
    $monImg.classList.add(`monster`, `ln${num}`, `new${i}`);
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

}, 500);

const afda = setTimeout(() => {
    const $monster = [...document.querySelectorAll('.monster')];
    // console.log(HP); 배열 잘 들어갔는지 확인

    const tlrks = setInterval(() => {
        for (let i = 0; i < 10; i++) {
            $monster[i].style.left = `${poX[i]+1}%`;
            poX[i] += 1;

            if (HP[i] === 0) {
                $monster[i].style.left = $monster[i].style.left;
                $monster[i].scr = `/* 죽는 모션 */`;
                $monster[i].animation = '';
                death++;
            }

            // 게임 end
            if (poX[i] > 84) {
                // clearInterval(tlrks);
                // alert('패배!!');
            } else if (death === 10) {
                clearInterval(tlrks);
                alert('승리!!');
            }

        }
    }, 380);

    clearInterval(afda); //10초뒤에 시작하고 한번만 돌게 설정.
}, 10000);

const $he1 = document.querySelector('.lane1 .left img');
const $he2 = document.querySelector('.lane1 .middle img');
const $he3 = document.querySelector('.lane1 .right img');
const $he4 = document.querySelector('.lane2 .left img');
const $he5 = document.querySelector('.lane2 .middle img');
const $he6 = document.querySelector('.lane2 .right img');
const $he7 = document.querySelector('.lane3 .left img');
const $he8 = document.querySelector('.lane3 .middle img');
const $he9 = document.querySelector('.lane3 .right img');
const $he10 = document.querySelector('.lane4 .left img');
const $he11 = document.querySelector('.lane4 .middle img');
const $he12 = document.querySelector('.lane4 .right img');


const he1At = setInterval(() => {
    let qkftk1 = 60;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x1`, `Y1`);
    $att.style.position = 'absolute';
    $att.style.left = `60%`;
    $att.style.top = `15%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he1.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX1 = [...document.querySelectorAll('.ln1')];
            for (let ele of $poX1) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he2At = setInterval(() => {
    let qkftk1 = 71;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x2`, `Y1`);
    $att.style.position = 'absolute';
    $att.style.left = `71%`;
    $att.style.top = `15%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he2.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX1 = [...document.querySelectorAll('.ln1')];
            for (let ele of $poX1) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he3At = setInterval(() => {
    let qkftk1 = 82;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x3`, `Y1`);
    $att.style.position = 'absolute';
    $att.style.left = `82%`;
    $att.style.top = `15%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he3.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX1 = [...document.querySelectorAll('.ln1')];
            for (let ele of $poX1) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he4At = setInterval(() => {
    let qkftk1 = 60;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x1`, `Y2`);
    $att.style.position = 'absolute';
    $att.style.left = `60%`;
    $att.style.top = `40%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he4.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX2 = [...document.querySelectorAll('.ln2')];
            for (let ele of $poX2) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he5At = setInterval(() => {
    let qkftk1 = 71;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x2`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `71%`;
    $att.style.top = `40%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he5.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX2 = [...document.querySelectorAll('.ln2')];
            for (let ele of $poX2) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he6At = setInterval(() => {
    let qkftk1 = 82;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x3`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `82%`;
    $att.style.top = `40%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he6.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX2 = [...document.querySelectorAll('.ln2')];
            for (let ele of $poX2) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he7At = setInterval(() => {
    let qkftk1 = 60;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x1`, `Y2`);
    $att.style.position = 'absolute';
    $att.style.left = `60%`;
    $att.style.top = `65%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he7.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX3 = [...document.querySelectorAll('.ln3')];
            for (let ele of $poX3) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he8At = setInterval(() => {
    let qkftk1 = 71;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x2`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `71%`;
    $att.style.top = `65%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he8.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX3 = [...document.querySelectorAll('.ln3')];
            for (let ele of $poX3) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he9At = setInterval(() => {
    let qkftk1 = 82;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x3`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `82%`;
    $att.style.top = `65%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he9.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX3 = [...document.querySelectorAll('.ln3')];
            for (let ele of $poX3) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he10At = setInterval(() => {
    let qkftk1 = 60;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x1`, `Y2`);
    $att.style.position = 'absolute';
    $att.style.left = `60%`;
    $att.style.top = `90%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he10.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX4 = [...document.querySelectorAll('.ln4')];
            for (let ele of $poX4) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he11At = setInterval(() => {
    let qkftk1 = 71;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x2`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `71%`;
    $att.style.top = `90%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he11.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX4 = [...document.querySelectorAll('.ln4')];
            for (let ele of $poX4) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const he12At = setInterval(() => {
    let qkftk1 = 82;
    const $att = document.createElement('div');
    $gameZone.appendChild($att);
    $att.classList.add('attack', `x3`, `Y3`);
    $att.style.position = 'absolute';
    $att.style.left = `82%`;
    $att.style.top = `90%`;
    $att.style.width = '3%';
    $att.style.height = '1%';
    $att.style.border = '2px solid white';
    $att.style.borderRadius = '5px';
    $att.style.background = 'aqua';
    $att.style.display = 'none';
    if ($he12.style.display === 'block') {
        $att.style.display = 'block';
    }

    const qkftk11 = setInterval(() => {
        $att.style.left = `${qkftk1-1}%`;
        qkftk1 -= 1;
        if (qkftk1 === 5) {
            clearInterval(qkftk11);
            $att.remove();
        } else {
            const $poX4 = [...document.querySelectorAll('.ln4')];
            for (let ele of $poX4) {
                if (ele.style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                }
            }
        }
    }, 7);
}, 1000)

const $want2 = document.querySelector('.summon-list .miner .miner-img');
const $want3 = document.querySelector('.summon-list .attacker .attacker-img');
document.addEventListener('click', e => {
    if (e.target === $want2) {
        wnat = 2;
    } else if(e.target === $want3) {
        want = 3;
    }
})
const $lane1LeA = document.querySelector('.game-zone .lane1 .left .game-attacker')
const $lane1MiA = document.querySelector('.game-zone .lane1 .middle .game-attacker')
const $lane1RiA = document.querySelector('.game-zone .lane1 .right .game-attacker')
const $lane2LeA = document.querySelector('.game-zone .lane2 .left .game-attacker')
const $lane2MiA = document.querySelector('.game-zone .lane2 .middle .game-attacker')
const $lane2RiA = document.querySelector('.game-zone .lane2 .right .game-attacker')
const $lane3LeA = document.querySelector('.game-zone .lane3 .left .game-attacker')
const $lane3MiA = document.querySelector('.game-zone .lane3 .middle .game-attacker')
const $lane3RiA = document.querySelector('.game-zone .lane3 .right .game-attacker')
const $lane4LeA = document.querySelector('.game-zone .lane4 .left .game-attacker')
const $lane4MiA = document.querySelector('.game-zone .lane4 .middle .game-attacker')
const $lane4RiA = document.querySelector('.game-zone .lane4 .right .game-attacker')

const $lane1LeM = document.querySelector('.game-zone .lane1 .left .game-miner')
const $lane1MiM = document.querySelector('.game-zone .lane1 .middle .game-miner')
const $lane1RiM = document.querySelector('.game-zone .lane1 .right .game-miner')
const $lane2LeM = document.querySelector('.game-zone .lane2 .left .game-miner')
const $lane2MiM = document.querySelector('.game-zone .lane2 .middle .game-miner')
const $lane2RiM = document.querySelector('.game-zone .lane2 .right .game-miner')
const $lane3LeM = document.querySelector('.game-zone .lane3 .left .game-miner')
const $lane3MiM = document.querySelector('.game-zone .lane3 .middle .game-miner')
const $lane3RiM = document.querySelector('.game-zone .lane3 .right .game-miner')
const $lane4LeM = document.querySelector('.game-zone .lane4 .left .game-miner')
const $lane4MiM = document.querySelector('.game-zone .lane4 .middle .game-miner')
const $lane4RiM = document.querySelector('.game-zone .lane4 .right .game-miner')

document.addEventListener('click', e => {
    if (want === 3) {
        if (e.target === $lane1LeA) {
            $he1.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1MiA) {
            $he2.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1RiA) {
            $he2.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2LeA) {
            $he4.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2MiA) {
            $he5.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2RiA) {
            $he6.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3LeA) {
            $he7.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3MiA) {
            $he8.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3RiA) {
            $he9.style.display = 'block';
            want = 1;
        }  else if (e.target === $lane4LeA) {
            $he10.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4MiA) {
            $he11.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4RiA) {
            $he12.style.display = 'block';
            want = 1;
        }
    }

    if (want === 2) {
        if (e.target === $lane1LeM) {
            $he1.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1MiM) {
            $he2.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1RiM) {
            $he2.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2LeM) {
            $he4.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2MiM) {
            $he5.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2RiM) {
            $he6.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3LeM) {
            $he7.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3MiM) {
            $he8.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3RiM) {
            $he9.style.display = 'block';
            want = 1;
        }  else if (e.target === $lane4LeM) {
            $he10.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4MiM) {
            $he11.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4RiM) {
            $he12.style.display = 'block';
            want = 1;
        }
    }

})