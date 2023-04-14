const $gameZone = document.querySelector('.game-zone');
let money = 0; //기본 돈
const plMon = setInterval(() => { //시간지날때마다 돈 들어오기
    money += 50;
}, 1000);

let i = 1; //소환 개수
let death = 10; // 죽은 수 체크


let poX = []; //몬스터 위치
let aa = -20; //몬스터 생길때마다 더 뒤로 생성
for (let i = 0; i < 10; i++) { //값 넣어주기
    poX[i] = aa;
    aa -= 47;
}

let HP1 = [];
let HP2 = [];
let HP3 = [];
let HP4 = [];


let want = 1;


//몬스터 생성
const newMon = setInterval(() => {
    const num = Math.floor((Math.random() * 4) + 1); // 생성될때마다 몬스터 라인 설정

    const $monImg = document.createElement('img');
    $gameZone.appendChild($monImg);
    $monImg.src = './img/enemys/HornMushy_walk.gif';
    $monImg.style.position = 'absolute';
    $monImg.classList.add(`monster`, `ln${num}`, `new${i}`);
    $monImg.style.width = '20%';
    $monImg.style.height = '25%';
    $monImg.style.left = '-20%';

    // 자리 배치해주기
    let poY = 0;
    if (num === 1) {
        poY = 5;
        HP1.push(10);
    } else if (num === 2) {
        poY = 30;
        HP2.push(10);
    } else if (num === 3) {
        poY = 55;
        HP3.push(10);
    } else if (num === 4) {
        poY = 80;
        HP4.push(10);
    }
    $monImg.style.left = `${poX}%`;
    $monImg.style.top = `${poY}%`;
    if (i === 10) { // 소환 정지
        clearInterval(newMon);
    }
    i++;
}, 500);

const $deathBtn = document.createElement('button');
$deathBtn.style.display = 'none';
$gameZone.appendChild($deathBtn);

$deathBtn.addEventListener('click', e => {

});


// let h = 0;
const afda = setTimeout(() => {
    const $monster = [...document.querySelectorAll('.monster')];

    const tlrks1 = setInterval(() => {
        for (let h = 0; h < 10; h++) {
            $monster[h].style.left = `${poX[h]+1}%`;
            poX[h] += 1;
        }
    }, 380);

    // const tlrks = setInterval(() => {
    //     for (let h = 0; h < 10; h++) {

    //         for (let k = 0; k < HP1.length; k++) {
    //             if (HP1[k] < 1) { //몬스터 죽기
    //                 HP1[k] = 1000000;
    //                 console.log($monster);
    //                 // $monster[h].style.left = $monster[h].style.left;
    //                 $monster[h].src = `./img/enemys/HornMushy_die.gif`;
    //                 const deathAni = setTimeout(() => {
    //                     poX[h] = -10000;
    //                     $monster[h].style.left = `-800%`;
    //                     clearTimeout(deathAni);
    //                 }, 1000);
    //                 death--;
    //                 // h++;
    //             }
    //         }
    //         for (let k = 0; k < HP2.length; k++) {
    //             if (HP2[k] < 1) { //몬스터 죽기
    //                 HP2[k] = 1000000;
    //                 console.log(h);
    //                 console.log($monster);

    //                 // $monster[h].style.left = $monster[h].style.left;
    //                 $monster[h].src = `./img/enemys/HornMushy_die.gif`;
    //                 const deathAni = setTimeout(() => {
    //                     poX[h] = -10000;
    //                     clearTimeout(deathAni);
    //                 }, 1000);
    //                 death--;
    //                 // h++;
    //             }
    //         }
    //         for (let k = 0; k < HP3.length; k++) {
    //             if (HP3[k] < 1) { //몬스터 죽기
    //                 HP3[k] = 100000;
    //                 console.log(h);
    //                 // $monster[h].style.left = $monster[h].style.left;
    //                 $monster[h].src = `./img/enemys/HornMushy_die.gif`;
    //                 const deathAni = setTimeout(() => {
    //                     poX[h] = -10000;
    //                     clearTimeout(deathAni);
    //                 }, 1000);
    //                 death--;
    //                 // h++;
    //             }
    //         }
    //         for (let k = 0; k < HP4.length; k++) {
    //             if (HP4[k] < 1) { //몬스터 죽기
    //                 HP4[k] = 100000;
    //                 console.log(h);
    //                 // $monster[h].style.left = $monster[h].style.left;
    //                 $monster[h].src = `./img/enemys/HornMushy_die.gif`;
    //                 const deathAni = setTimeout(() => {
    //                     poX[h] = -10000;
    //                     clearTimeout(deathAni);
    //                 }, 1000);
    //                 death--;
    //                 // h++;
    //             }
    //         }
    //         // 게임 end
    //         if (poX[h] > 84) {
    //             clearInterval(tlrks);
    //             alert('패배!!');
    //         } else if (death === 0) {
    //             // clearInterval(tlrks);
    //             // alert('승리!!');
    //         }
    //     }

    // }, 1000);

    clearTimeout(afda); //10초뒤에 시작하고 한번만 돌게 설정.
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

// 공격

const he1At = setInterval(() => {
    const $poX1 = [...document.querySelectorAll('.ln1')];
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
        if (qkftk1 === 5) { //공격 마지막 거리 5%
            clearInterval(qkftk11);
            $att.remove();
        } else { //몬스터 만나면 사라지기
            for (let z = 0; z < $poX1.length; z++) {
                if ($poX1[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP1[z]--;
                    if(HP1[z] < 0) {
                        
                        // $poX1[z].addEventListener('click', e => {
                        //     console.log('gg');
                        // })

                        
                    }
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
            for (let z = 0; z < $poX1.length; z++) {
                if ($poX1[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP1[z]--;
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
            for (let z = 0; z < $poX1.length; z++) {
                if ($poX1[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP1[z]--;
                    // console.log(HP1);
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
            for (let z = 0; z < $poX2.length; z++) {
                if ($poX2[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP2[z]--;
                    // console.log(HP2);
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
            for (let z = 0; z < $poX2.length; z++) {
                if ($poX2[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP2[z]--;
                    // console.log(HP2);
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
            for (let z = 0; z < $poX2.length; z++) {
                if ($poX2[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP2[z]--;
                    // console.log(HP2);
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
            for (let z = 0; z < $poX3.length; z++) {
                if ($poX3[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP3[z]--;
                    // console.log(HP3);
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
            for (let z = 0; z < $poX3.length; z++) {
                if ($poX3[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP3[z]--;
                    // console.log(HP3);
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
            for (let z = 0; z < $poX3.length; z++) {
                if ($poX3[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP3[z]--;
                    // console.log(HP3);
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
            for (let z = 0; z < $poX4.length; z++) {
                if ($poX4[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP4[z]--;
                    // console.log(HP4);
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
            for (let z = 0; z < $poX4.length; z++) {
                if ($poX4[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP4[z]--;
                    // console.log(HP4);
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
            for (let z = 0; z < $poX4.length; z++) {
                if ($poX4[z].style.left > $att.style.left) {
                    clearInterval(qkftk11);
                    $att.remove();
                    HP4[z]--;
                    // console.log(HP4);
                }
            }
        }
    }, 7);
}, 1000)


const $lane1LeA = document.querySelector('.game-zone .lane1 .left')
const $lane1MiA = document.querySelector('.game-zone .lane1 .middle')
const $lane1RiA = document.querySelector('.game-zone .lane1 .right')
const $lane2LeA = document.querySelector('.game-zone .lane2 .left')
const $lane2MiA = document.querySelector('.game-zone .lane2 .middle')
const $lane2RiA = document.querySelector('.game-zone .lane2 .right')
const $lane3LeA = document.querySelector('.game-zone .lane3 .left')
const $lane3MiA = document.querySelector('.game-zone .lane3 .middle')
const $lane3RiA = document.querySelector('.game-zone .lane3 .right')
const $lane4LeA = document.querySelector('.game-zone .lane4 .left')
const $lane4MiA = document.querySelector('.game-zone .lane4 .middle')
const $lane4RiA = document.querySelector('.game-zone .lane4 .right')

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

const $want2 = document.querySelector('.summon-list .miner .miner-img');
const $want3 = document.querySelector('.summon-list .attacker .attacker-img');
document.addEventListener('click', e => {
    if (e.target === $want2) {
        want = 2;
        const $chMi = [...document.querySelectorAll('.game-zone .game-miner')];
        for (let $ele of $chMi) {
            $ele.style.zIndex = '3';
        }
    } else if (e.target === $want3) {
        want = 3;
        const $chAt = [...document.querySelectorAll('.game-zone .game-attacker')];
        for (let $ele of $chAt) {
            $ele.style.zIndex = '3';
        }
    }
})

document.addEventListener('click', e => {
    if (want === 3) {
        if (e.target === $lane1LeA) {
            $he1.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1MiA) {
            $he2.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1RiA) {
            $he3.style.display = 'block';
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
        } else if (e.target === $lane4LeA) {
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
        if (e.target === $lane1LeA) {
            $lane1LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1MiA) {
            $lane1MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane1RiA) {
            $lane1RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2LeA) {
            $lane2LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2MiA) {
            $lane2MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane2RiA) {
            $lane2RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3LeA) {
            $lane3LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3MiA) {
            $lane3MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane3RiA) {
            $lane3RiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4LeA) {
            $lane4LeM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4MiA) {
            $lane4MiM.style.display = 'block';
            want = 1;
        } else if (e.target === $lane4RiA) {
            $lane4RiM.style.display = 'block';
            want = 1;
        }
    }

})